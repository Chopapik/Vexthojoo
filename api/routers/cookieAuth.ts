import { Router } from "express";
import cookieLogin from "../controllers/CookieAuth/cookieLogin";
import removeAuthCookie from "../controllers/CookieAuth/removeAuthCookie";

const router = Router();

router.get("/cookieLogin", cookieLogin);
router.get("/removeAuthCookie", removeAuthCookie);

export default router;
