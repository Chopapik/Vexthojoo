import { Router } from "express";

const router = Router();

import { cookieLogin } from "../controllers/cookieAuthController";

router.get("/cookieLogin", cookieLogin);

export default router;
