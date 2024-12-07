import express from "express";
const router = express.Router();
import multer from "multer";

const upload = multer({
  dest: "./uploads/postsImages",
});

import {
  printAllPosts,
  addPost,
  removePost,
} from "../controllers/postsController";

router.get("/printAllPosts", printAllPosts);
router.post("/addPost", upload.single("image"), addPost);
router.delete("/removePost/:postid", removePost);

export default router;
