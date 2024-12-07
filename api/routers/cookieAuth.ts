import { Router } from "express";

const router = Router();

import cookieLogin from "../controllers/CookieAuth/cookieLogin";
router.get("/cookieLogin", cookieLogin);

export default router;
