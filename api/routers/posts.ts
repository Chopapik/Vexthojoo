import express from "express";
const router = express.Router();

import {
  printAllPosts,
  addPost,
  removePost,
} from "../controllers/postsController";

router.get("/printAllPosts", printAllPosts);
router.post("/addPost", addPost);
router.delete("/removePost/:postid", removePost);

export default router;
