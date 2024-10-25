import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import createError from "http-errors";
import ejs from "ejs";
import db from "./mysqlConnection";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Routery:
import auth from "./routers/auth";
app.use("/auth", auth);

import postsRouter from "./routers/posts";
app.use("/", postsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
