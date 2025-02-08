import { Request, Response } from "express";
import db from "../../mysqlConnection";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const updateUserData = async (req: Request, res: Response) => {
  interface userDataTypes {
    userid: number;
    username: string | undefined;
    avatarPath: string | undefined;
  }
  const protocol = req.protocol;
  const hostName = req.get("host");

  //values from frontend
  const { username } = req.body;
  const avatar = req.file;

  const cookie = req.cookies.token;
  const secret = process.env.SECRET;

  if (username && username.includes(" ")) {
    res.status(409).json({
      message: "Nazwa nie moze zawierać spacji",
    });
    return;
  }

  if (!username || username.trim().length === 0) {
    res.status(409).json({ message: "Nazwa nie moze być pusta" });
    return;
  }

  try {
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
        avatarPath: decodedToken.avatarPath,
      };

      //Updating username:
      if (username !== undefined) {
        try {
          await db.query("UPDATE users SET username = ? WHERE id=?", [
            username,
            decodedToken.userid,
          ]);
          UserData.username = username;
        } catch (error) {
          const errorMessage = (error as Error).message;
          res.status(500).json({ message: errorMessage, type: "critical" });
          return;
        }
      }
      // Updating avatar:
      if (avatar !== undefined) {
        //Avatar path with protocol://host/uploads/usersAvatars prefix
        const avatarPath = `${protocol}://${hostName}/uploads/UsersAvatars/${avatar.filename}`;

        try {
          await db.query("UPDATE users SET avatarPath = ? WHERE id=?", [
            avatarPath,
            decodedToken.userid,
          ]);
          UserData.avatarPath = avatarPath;
        } catch (error) {
          const errorMessage = (error as Error).message;
          res.status(500).json({ message: errorMessage, type: "critical" });
          return;
        }
      }

      res.clearCookie("token");

      //creating cookie with new values, that were set
      const token = jwt.sign(
        {
          username: UserData.username,
          userid: UserData.userid,
          avatarPath: UserData.avatarPath,
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
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
    return;
  }
};

export default updateUserData;
