import db from "../../mysqlConnection";
import { Request, Response } from "express";

const updatePost = async (req: Request, res: Response) => {
  const { text } = req.body;
  //   const newImage = req.file;

  const postId: number = Number(req.params.postId);

  try {
    if (text) {
      await db.query("UPDATE posts SET text = ? WHERE id = ?", [text, postId]);
      await db.query("UPDATE posts SET isEdited = true WHERE id=?", [postId]);
      res.end();
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default updatePost;
