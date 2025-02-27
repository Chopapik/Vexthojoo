import multer from "multer";
import { Request, Response, NextFunction } from "express";

const uploadImageToRam = () => {
  const storage = multer.memoryStorage();
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 }, //1MB
  });
  const uploadFunction = upload.single("image");

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFunction(req, res, (err: any) => {
      if (err && err.code === "LIMIT_FILE_SIZE") {
        return res
          .status(417)
          .json({ message: "Plik jest za duży. Maksymalny rozmiar to 1 MB" });
      } else if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ message: "File upload failed" });
      }

      if (req.file) {
        const fileFieldName = req.file?.fieldname;
        const fileType = req.file?.originalname.split(".").pop();
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        req.body.fileName = fileFieldName + "-" + uniqueSuffix + "." + fileType;
      }

      next();
    });
  };
};

export default uploadImageToRam;
