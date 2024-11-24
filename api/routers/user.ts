import { userPage, updateData } from "../controllers/usersController";
import router from "./auth";

router.get("/:username", userPage);
router.post("/updateData", updateData);

export default router;
