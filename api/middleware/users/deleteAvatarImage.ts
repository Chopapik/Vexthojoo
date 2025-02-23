import { NextFunction, Request, Response } from "express";
import fs from "fs";
import db from "../../mysqlConnection";
import path from "path";

import jwt from "jsonwebtoken";

const deleteAvatarImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const [rows] = await db.query("SELECT avatarPath FROM users WHERE id=?", [
      req.params.userid,
    ]);
    const { avatarPath } = rows[0];
    if (avatarPath) {
      const imageFileName = avatarPath.split("/").pop();
      const imageFilePath = path.join(
        __dirname,
        "../../uploads/usersAvatars",
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

export default deleteAvatarImage;
