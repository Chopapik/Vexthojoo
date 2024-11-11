import { Request, Response } from "express";
import db from "../mysqlConnection";

export const userPage = async (req: Request, res: Response) => {
  const { username } = req.params;

  const [posts] = await db.query(
    "SELECT u.username,u.avatar,p.TEXT,p.whenUpload,p.whatDevice FROM users u JOIN posts p ON p.user_id=u.id WHERE username=? ORDER BY p.whenUpload DESC",
    [username]
  );
  res.json(posts);
};
