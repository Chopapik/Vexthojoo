import express from "express";
import multer from "multer";

import userData from "../controllers/users/userData";
import updateUserData from "../controllers/users/updateUserData";
import deleteUserAccount from "../controllers/users/deleteUserAccount";
import fetchAllUsers from "../controllers/users/fetchAllUsers";

const router = express.Router();
const upload = multer({
  dest: "./uploads/UsersAvatars",
});
router.get("/allUsers", fetchAllUsers);
router.get("/:username", userData);
router.post("/updateData", upload.single("avatar"), updateUserData);
router.delete("/removeUser/:userIdToRemove", deleteUserAccount);

export default router;
