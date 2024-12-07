import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";

const printAllPosts = async (req: Request, res: Response) => {
  const [posts] = await db.query(
    "SELECT u.username,u.avatar,p.TEXT,p.whenUpload,p.whatDevice,p.imagePath FROM users u JOIN posts p ON p.user_id=u.id ORDER BY p.whenUpload DESC"
  );

  res.json(posts);
};

export default printAllPosts;
