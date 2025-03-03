import db from "../../mysqlConnection";
import { Request, Response } from "express";

const updatePost = async (req: Request, res: Response) => {
  const { text } = req.body;
  //   const newImage = req.file;

  const postid: number = Number(req.params.postid);

  try {
    if (text) {
      await db.query("UPDATE posts SET text = ? WHERE id = ?", [text, postid]);
      await db.query("UPDATE posts SET isEdited = true WHERE id=?", [postid]);
      res.end();
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default updatePost;
