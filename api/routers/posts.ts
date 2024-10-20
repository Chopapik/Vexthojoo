import express from "express";
const router = express.Router();

import postsController from "../controllers/postsController";

router.get("/test", postsController);

export default postsController;
