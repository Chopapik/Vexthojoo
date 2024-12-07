import express from "express";
const router = express.Router();

import register from "../controllers/auth/register";
import login from "../controllers/auth/login";
import logout from "../controllers/auth/logout";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
