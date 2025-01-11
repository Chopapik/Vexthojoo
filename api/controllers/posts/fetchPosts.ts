import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";

const fetchPosts = async (req: Request, res: Response) => {
  try {
    const [posts] = await db.query(
      "SELECT p.id,u.username,u.avatarPath,p.text,p.whenUpload,p.whatDevice,p.imagePath,p.isEdited FROM users u JOIN posts p ON p.user_id=u.id ORDER BY p.whenUpload DESC"
    );

    res.status(200).json(posts);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default fetchPosts;
