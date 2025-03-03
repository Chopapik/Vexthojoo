import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import db from "./../../mysqlConnection";

const cookieLogin = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  const secret = process.env.SECRET;

  try {
    if (token) {
      if (secret) {
        const cookieLoginUserData = await jwt.verify(token, secret);
        interface cookieUserData {
          username: string;
          userid: number;
          avatarPath: string;
          issueat: number;
        }

        //cookie token user data
        const { username, userid, avatarPath, issueat } =
          cookieLoginUserData as cookieUserData;

        const DateTimeNow = new Date();

        try {
          await db.query("UPDATE users SET whenLastLogged = ? WHERE id = ?", [
            DateTimeNow,
            userid,
          ]);
        } catch (error) {
          if (error instanceof Error) {
            res.status(500).json({ message: error.message });
          }
        }

        res.status(200).json({
          username: username,
          userid: userid,
          avatarPath: avatarPath,
          issueat: issueat,
          message: "User authorised.",
        });
      } else {
        res.status(500).json({ message: "Secret is not defined" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized: Invalid token." });
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default cookieLogin;
