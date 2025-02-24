import express, { NextFunction, Request, Response } from "express";
import multer from "multer";

import userData from "../controllers/users/userData";
import updateUserData from "../controllers/users/updateUserData";
import deleteUserAccount from "../controllers/users/deleteUserAccount";
import fetchAllUsers from "../controllers/users/fetchAllUsers";
import handleImageUpload from "../middleware/handleImageUpload";
import updateUserPassword from "../controllers/users/updateUserPassword";

import deleteAvatarImage from "../middleware/users/deleteAvatarImage";
import checkUserAuthorization from "../middleware/users/checkUserAuthorization ";
const router = express.Router();

import getUseridByParams from "../utils/getUseridByParam";

router.get("/allUsers", fetchAllUsers);
router.get("/:username", userData);

router.post(
  "/updateData/:userid",
  checkUserAuthorization(getUseridByParams),
  deleteAvatarImage,
  handleImageUpload({
    fileBodyName: "avatar",
    dest: "./uploads/UsersAvatars",
  }),
  updateUserData
);

router.delete(
  "/removeUser/:userid",
  checkUserAuthorization(getUseridByParams),
  deleteUserAccount
);

export default router;
