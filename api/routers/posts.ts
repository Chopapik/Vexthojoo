import express from "express";
const router = express.Router();

import { printAllPosts, addPost } from "../controllers/postsController";

router.get("/printPosts", printAllPosts);
router.post("/addPost", addPost);

export default router;
