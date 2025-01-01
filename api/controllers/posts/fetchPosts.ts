import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";

const fetchPosts = async (req: Request, res: Response) => {
  try {
    const [posts] = await db.query(
      "SELECT p.id,u.username,u.avatarPath,p.text,p.whenUpload,p.whatDevice,p.imagePath,p.isEdited FROM users u JOIN posts p ON p.user_id=u.id ORDER BY p.whenUpload DESC"
    );

    if (posts.length === 0) {
      res.status(204).json({ message: "Nie znaleziono postów" });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera" });
    console.log(error);
  }
};

export default fetchPosts;
