import express from "express";
import db from "../../mysqlConnection";
import { Request, Response } from "express";
import UAParser from "ua-parser-js";
import jwt from "jsonwebtoken";

const addPost = async (req: Request, res: Response) => {
  const { text, fileName, decodedToken } = req.body;

  const whenUpload = new Date();

  const parser = new UAParser();
  const ua = parser.setUA(req.headers["user-agent"] || "").getResult();
  const whatDevice = ua.os.name;

  const imageFile = req.file;

  try {
    const { userid } = decodedToken;

    const protocol = req.protocol;
    const host = req.get("host");

    const imagePath = imageFile
      ? `${protocol}://${host}/uploads/postsImages/${fileName}`
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
