import db from "../mysqlConnection";
import { Request, Response } from "express";

const getPostAuthorId = async (req: Request, res: Response) => {
  const postId = Number(req.params.postId);

  try {
    const [rows] = await db.query("SELECT user_id FROM posts WHERE id=?", [
      postId,
    ]);
    const { user_id } = rows[0];
    return user_id;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
};

export default getPostAuthorId;
