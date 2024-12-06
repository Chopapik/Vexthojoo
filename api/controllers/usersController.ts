import { Request, Response } from "express";
import db from "../mysqlConnection";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export const userPage = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const [posts] = await db.query(
      "SELECT u.username,u.avatar,p.id,p.TEXT,p.whenUpload,p.whatDevice FROM users u JOIN posts p ON p.user_id=u.id WHERE username=? ORDER BY p.whenUpload DESC",
      [username]
    );

    const [userData] = await db.query(
      "SELECT username,avatar,whenRegist,whenLastLogged FROM users WHERE username=?",
      [username]
    );

    if (userData.length > 0) {
      res.json({ posts: posts, userData: userData });
    } else {
      res.status(404).json({ notFoundUser: username });
    }
  } catch (err) {
    res.status(500);
  }
};

export const updateData = async (req: Request, res: Response) => {
  interface userDataTypes {
    userid: number;
    username: string | undefined;
    avatar: string | undefined;
  }
  const protocol = req.protocol;
  const hostName = req.get("host");

  //values from frontend
  const { username } = req.body;
  const avatar = req.file;

  const cookie = req.cookies.token;
  const secret = process.env.SECRET;

  //Checking if new user name isn't the same as the old one, with !(foundUser.length > 0)
  const [foundUser] = await db.query(
    "SELECT username FROM users WHERE username=?",
    [username]
  );

  if (cookie && secret && !(foundUser.length > 0)) {
    const decodedToken = jwt.verify(cookie, secret) as userDataTypes;

    const UserData: userDataTypes = {
      userid: decodedToken.userid,
      username: decodedToken.username,
      avatar: decodedToken.avatar,
    };

    //Updating username:
    if (username !== undefined) {
      try {
        await db.query("UPDATE users SET username = ? WHERE id=?", [
          username,
          decodedToken.userid,
        ]);
        UserData.username = username;
      } catch (err) {
        console.log("Users data update in db err");
      }
    }
    // Updating avatar:
    if (avatar !== undefined) {
      //Avatar path with protocol://host/uploads/usersAvatars prefix
      const avatarPath = `${protocol}://${hostName}/uploads/UsersAvatars/${avatar.filename}`;

      try {
        await db.query("UPDATE users SET avatar = ? WHERE id=?", [
          avatarPath,
          decodedToken.userid,
        ]);
        UserData.avatar = avatarPath;
      } catch (err) {
        console.log("Users data update in db err");
      }
    }

    res.clearCookie("token");

    //creating cookie with new values, that were set
    const token = jwt.sign(
      {
        username: UserData.username,
        userid: UserData.userid,
        avatar: UserData.avatar,
      },
      secret
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.json({ UserData });
  } else {
    res.status(400).json({ message: "Nazwa jest zajęta" });
  }
};
