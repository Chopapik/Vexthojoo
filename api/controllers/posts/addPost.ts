import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";
import UAParser from "ua-parser-js";
import jwt from "jsonwebtoken";

interface decodedUserDataTokenTypes {
  userid: number;
}

const addPost = async (req: Request, res: Response) => {
  const { text } = req.body;
  const image = req.file;

  const whenUpload = new Date();

  const parser = new UAParser();
  const ua = parser.setUA(req.headers["user-agent"] || "").getResult();
  const whatDevice = ua.os.name;

  const decodedUserDataToken = jwt.decode(req.cookies.token);

  if (!text || text.trim().length === 0) {
    res.status(409).json({ message: "Nie podano treści" });
    return;
  }

  try {
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
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default addPost;
