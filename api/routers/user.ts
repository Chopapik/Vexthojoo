import express from "express";
import multer from "multer";

import userPage from "../controllers/users/userPage";
import updateUserData from "../controllers/users/updateUserData";

const router = express.Router();
const upload = multer({
  dest: "./uploads/UsersAvatars",
});

router.get("/:username", userPage);
router.post("/updateData", upload.single("avatar"), updateUserData);

export default router;
