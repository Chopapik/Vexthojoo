import express from "express";
import db from "../mysqlConnection";

const postsController = async (req: any, res: any) => {
  const [posts] = await db.query(
    "SELECT u.username,u.avatar,p.TEXT,p.whenUpload,p.whatDevice FROM users u JOIN posts p ON p.user_id=u.id"
  );

  res.json(posts);
};

export default postsController;
