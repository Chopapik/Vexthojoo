import { Router } from "express";

const router = Router();

import { cookieLogin } from "../controllers/cookieAuthController";

router.post("/cookieLogin", cookieLogin);

export default router;
