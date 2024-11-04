import express from "express";
const router = express.Router();

import { printAllPosts } from "../controllers/postsController";

router.get("/printPosts", printAllPosts);

export default router;
