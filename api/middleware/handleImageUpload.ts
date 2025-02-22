import { NextFunction, Request, Response } from "express";
import multer from "multer";

const handleImageUpload = ({
  fileBodyName,
  dest,
}: {
  fileBodyName: string;
  dest: string;
}) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, dest);
    },
    filename: (req, file, cb) => {
      const fileExtension = file.originalname.split(".").pop();
      const newFileName = `${Date.now()}.${fileExtension}`;
      cb(null, newFileName);
    },
  });

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },
  });

  return (req: Request, res: Response, next: NextFunction) => {
    const uploadSingle = upload.single(fileBodyName);

    uploadSingle(req, res, (err: any) => {
      if (err && err.code === "LIMIT_FILE_SIZE") {
        return res
          .status(417)
          .json({ message: "Plik jest za duży. Maksymalny rozmiar to 1 MB" });
      } else if (err) {
        console.error("File upload error:", err);
        return res.status(400).json({ message: "File upload failed" });
      }
      next();
    });
  };
};

export default handleImageUpload;
