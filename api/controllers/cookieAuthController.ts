import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export const cookieLogin = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  const secret = process.env.SECRET;

  if (token) {
    if (secret) {
      const cookieLoginUserData = await jwt.verify(token, secret);
      console.log(cookieLoginUserData);

      interface cookieUserData {
        username: string;
        userid: number;
        issueat: number;
      }

      //cookie token user data
      const { username, userid, issueat } =
        cookieLoginUserData as cookieUserData;

      res.status(200).json({
        username: username,
        userid: userid,
        issueat: issueat,
        message: "User authorised.",
      });
    } else {
      res.status(500).json({ message: "Secret is not defined" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid token." });
  }
};