import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";

export const removePost = async (req: Request, res: Response) => {
  const postid = req.params.postid;
  await db.query("DELETE FROM posts WHERE id=?", [postid]);
  res.json({ message: `Usunięto post od id: ${postid}` });
};

export default removePost;
