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
  const { username } = req.body;
  const avatar = req.file;
  const cookie = req.cookies.token;
  const secret = process.env.SECRET;

  const [foundUser] = await db.query(
    "SELECT username FROM users WHERE username=?",
    [username]
  );

  if (cookie && secret && !(foundUser.length > 0)) {
    const decodedToken = jwt.verify(cookie, secret) as {
      userid: number;
      username: string;
      avatar: File;
    };

    const UserData = {
      userid: decodedToken.userid,
      username: decodedToken.username,
      avatar: decodedToken.avatar,
    };

    //Updating only username:
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

    res.clearCookie("token");

    const token = jwt.sign(
      {
        username: UserData.username,
        userid: UserData.userid,
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
