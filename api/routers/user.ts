import { userPage } from "../controllers/usersController";
import router from "./auth";

router.get("/:username", userPage);

export default router;
