import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";

export const removePost = async (req: Request, res: Response) => {
  const postid = req.params.postid;
  try {
    await db.query("DELETE FROM posts WHERE id=?", [postid]);
    res.json({ message: `Usunięto post od id: ${postid}` });
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera" });
    console.log(error);
  }
};

export default removePost;
