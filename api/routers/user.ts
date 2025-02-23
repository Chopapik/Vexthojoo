import express from "express";
import multer from "multer";

import userData from "../controllers/users/userData";
import updateUserData from "../controllers/users/updateUserData";
import deleteUserAccount from "../controllers/users/deleteUserAccount";
import fetchAllUsers from "../controllers/users/fetchAllUsers";
import handleImageUpload from "../middleware/handleImageUpload";
import updateUserPassword from "../controllers/users/updateUserPassword";

import deleteAvatarImage from "../middleware/users/deleteAvatarImage";

const router = express.Router();

router.get("/allUsers", fetchAllUsers);
router.get("/:username", userData);

router.post(
  "/updateData/:userid",
  deleteAvatarImage,
  handleImageUpload({
    fileBodyName: "avatar",
    dest: "./uploads/UsersAvatars",
  }),
  updateUserData
);
router.delete("/removeUser/:userIdToRemove", deleteUserAccount);
router.post("/updateUserPassword", updateUserPassword);

export default router;
