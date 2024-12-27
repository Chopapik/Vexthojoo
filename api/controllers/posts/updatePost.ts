import db from "../../mysqlConnection";
import { Request, Response } from "express";

const updatePost = async (req: Request, res: Response) => {
  const { newText } = req.body;
  //   const newImage = req.file;

  const postId: number = parseInt(req.params.postId, 10);

  try {
    if (newText) {
      await db.query("UPDATE posts SET text = ? WHERE id = ?", [
        newText,
        postId,
      ]);
      await db.query("UPDATE posts SET isEdited = true WHERE id=?", [postId]);
      res.end();
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

export default updatePost;
