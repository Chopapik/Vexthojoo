import { NextFunction, Request, Response } from "express";
import fs from "fs";
import db from "../../mysqlConnection";
import path from "path";

const deletePostImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const [rows] = await db.query("SELECT imagePath FROM posts WHERE id=?", [
      req.params.postid,
    ]);

    const { imagePath } = rows[0];

    if (imagePath) {
      const imageFileName = imagePath.split("/").pop();

      const imageFilePath = path.join(
        __dirname,
        "../../uploads/postsImages",
        imageFileName
      );

      fs.unlink(imageFilePath, (error) => {
        if (error) {
          res.status(500).json({ message: error?.message });
        } else {
          next();
        }
      });
    } else {
      next();
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default deletePostImage;
