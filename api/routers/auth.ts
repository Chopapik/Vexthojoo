import express from "express";
const router = express.Router();

import { login } from "../controllers/authController";

router.get("/login", login);

export default router;
