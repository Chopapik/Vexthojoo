import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const uploadPostImageFile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uploadsPath = path.join(__dirname, "../uploads/postsImages");

  const imageFileName = req.body.fileName;
  const imageFileBuffer = req.file?.buffer;
  const imageFile = req.file;

  if (imageFileName && imageFileBuffer && imageFile) {
    const filePath = path.join(uploadsPath, imageFileName);

    fs.writeFile(filePath, imageFileBuffer, (error) => {
      if (error) {
        return res.status(500).send({ message: error.message });
      }
      next();
    });
  } else {
    next();
  }
};

export default uploadPostImageFile;
