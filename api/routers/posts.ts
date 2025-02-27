import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import fetchPosts from "../controllers/posts/fetchPosts";
import addPost from "../controllers/posts/addPost";
import removePost from "../controllers/posts/removePost";
import updatePost from "../controllers/posts/updatePost";
import { addPostsLimiter } from "../middleware/queriesLimiter";
import handleImageUpload from "../middleware/handleImageUpload";

import deletePostImage from "../middleware/posts/deletePostImage";
import verifyToken from "../middleware/verifyToken";
import getPostAuthorId from "../utils/getPostAuthorId";
import checkUserAuthorization from "../middleware/users/checkUserAuthorization ";
import uploadPostImageFile from "../middleware/uploadPostImageFile";
import uploadImageToRam from "../middleware/uploadImageToRam";

import {
  checkIsPostEmpty,
  checkStringLength,
  checkLink,
  checkTextWordsLength,
} from "../middleware/posts/postContentValidations";

router.get("/printAllPosts", fetchPosts);

router.post(
  "/addPost",
  addPostsLimiter,
  uploadImageToRam(),
  verifyToken,
  checkIsPostEmpty,
  checkTextWordsLength,
  checkStringLength,
  checkLink,

  uploadPostImageFile,

  addPost
);

router.delete(
  "/removePost/:postid",
  checkUserAuthorization(getPostAuthorId),
  deletePostImage,
  removePost
);

router.put(
  "/updatePost/:postId",
  uploadImageToRam(),
  checkTextWordsLength,
  checkStringLength,
  checkLink,
  updatePost
);

export default router;
