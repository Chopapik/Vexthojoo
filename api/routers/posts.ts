import express from "express";
const router = express.Router();
import multer from "multer";
import fetchPosts from "../controllers/posts/fetchPosts";
import addPost from "../controllers/posts/addPost";
import removePost from "../controllers/posts/removePost";
import updatePost from "../controllers/posts/updatePost";
import { addPostsLimiter } from "../middleware/queriesLimiter";
import handleImageUpload from "../middleware/handleImageUpload";

router.get("/printAllPosts", fetchPosts);
router.post(
  "/addPost",
  addPostsLimiter,
  handleImageUpload({ fileBodyName: "image", dest: "./uploads/postsImages" }),
  addPost
);
router.delete("/removePost/:postid", removePost);
router.put(
  "/updatePost/:postId",
  handleImageUpload({ fileBodyName: "image", dest: "./uploads/postsImages" }),
  updatePost
);
export default router;
