import express from "express";
const router = express.Router();
import multer from "multer";
import fetchPosts from "../controllers/posts/fetchPosts";
import addPost from "../controllers/posts/addPost";
import removePost from "../controllers/posts/removePost";

const upload = multer({
  dest: "./uploads/postsImages",
});

router.get("/printAllPosts", fetchPosts);
router.post("/addPost", upload.single("image"), addPost);
router.delete("/removePost/:postid", removePost);

export default router;
