import express from "express";
const router = express.Router();

import { printPosts } from "../controllers/postsController";

router.get("/test", printPosts);

export default router;
