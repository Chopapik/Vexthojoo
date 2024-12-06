import { userPage, updateData } from "../controllers/usersController";
import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({
  dest: "./uploads/UsersAvatars",
});

router.get("/:username", userPage);
router.post("/updateData", upload.single("avatar"), updateData);

export default router;
