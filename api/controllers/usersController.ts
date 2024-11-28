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

    console.log(userData);

    if (userData.length > 0) {
      res.json({ posts: posts, userData: userData });
    } else {
      res.status(404).json({ notFoundUser: username });
    }
  } catch (err) {
    res.status(500);
  }
};
