import express from "express";
const router = express.Router();
import multer from "multer";
import printAllPosts from "../controllers/posts/printAllPosts";
import addPost from "../controllers/posts/addPost";
import removePost from "../controllers/posts/removePost";

const upload = multer({
  dest: "./uploads/postsImages",
});

router.get("/printAllPosts", printAllPosts);
router.post("/addPost", upload.single("image"), addPost);
router.delete("/removePost/:postid", removePost);

export default router;
