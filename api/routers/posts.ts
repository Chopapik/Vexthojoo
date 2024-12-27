import express from "express";
const router = express.Router();
import multer from "multer";
import fetchPosts from "../controllers/posts/fetchPosts";
import addPost from "../controllers/posts/addPost";
import removePost from "../controllers/posts/removePost";
import updatePost from "../controllers/posts/updatePost";

const upload = multer({
  dest: "./uploads/postsImages",
});

router.get("/printAllPosts", fetchPosts);
router.post("/addPost", upload.single("image"), addPost);
router.delete("/removePost/:postid", removePost);
router.put("/updatePost/:postId", upload.single("image"), updatePost);
export default router;
