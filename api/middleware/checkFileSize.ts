//This middleware checks if the file size is not greater than 2MB, otherwise upload will be terminated.

import { Request, Response, NextFunction } from "express";

const checkFileSize = (req: Request, res: Response, next: NextFunction) => {
  console.log("sprawdzam");
  if (req.file && req.file?.size > 2 * 1024 * 1024) {
    console.log("plik za duzy");
    res.status(400).json({
      message: "Plik jest za duży. Maksymalny dopuszczalny rozmiar to 2MB",
    });
    return;
  } else {
    next();
  }
};

export default checkFileSize;
