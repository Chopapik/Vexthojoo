import db from "../mysqlConnection";
import { Request, Response } from "express";

const getPostAuthorId = async (req: Request, res: Response) => {
  const postid = req.params.postid;

  try {
    const [rows] = await db.query("SELECT user_id FROM posts WHERE id=?", [
      postid,
    ]);
    const { user_id } = rows[0];
    return user_id;
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getPostAuthorId;
