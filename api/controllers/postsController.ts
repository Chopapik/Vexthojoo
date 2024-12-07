import express from "express";
import db from "../mysqlConnection";
import { Request, Response } from "express";
import UAParser from "ua-parser-js";
import jwt from "jsonwebtoken";

export const printAllPosts = async (req: Request, res: Response) => {
  const [posts] = await db.query(
    "SELECT u.username,u.avatar,p.TEXT,p.whenUpload,p.whatDevice,p.imagePath FROM users u JOIN posts p ON p.user_id=u.id ORDER BY p.whenUpload DESC"
  );

  res.json(posts);
};

export const addPost = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const image = req.file;

    const whenUpload = new Date();

    const parser = new UAParser();
    const ua = parser.setUA(req.headers["user-agent"] || "").getResult();
    const whatDevice = ua.os.name;

    const decodedUserDataToken = jwt.decode(req.cookies.token);

    interface decodedUserDataTokenTypes {
      userid: number;
    }

    const { userid } = <decodedUserDataTokenTypes>decodedUserDataToken;

    const protocol = req.protocol;
    const host = req.get("host");

    const imagePath = image
      ? `${protocol}://${host}/uploads/postsImages/${image?.filename}`
      : null;

    await db.query(
      "INSERT INTO posts (TEXT,imagePath,whenUpload,whatDevice,user_id) VALUES (?,?,?,?,?)",
      [text, imagePath, whenUpload, whatDevice, userid]
    );
    res.status(201).json({ message: "Post utworzony" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Coś się zdupcyło: ${err}` });
  }
};
export const removePost = async (req: Request, res: Response) => {
  const postid = req.params.postid;
  await db.query("DELETE FROM posts WHERE id=?", [postid]);
  res.json({ message: `Usunięto post od id: ${postid}` });
};
