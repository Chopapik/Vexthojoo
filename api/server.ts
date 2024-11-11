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
import path from "path";

dotenv.config();
const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

//routers import:
import auth from "./routers/auth";
import postsRouter from "./routers/posts";
import cookieAuth from "./routers/cookieAuth";
import user from "./routers/user";

//routers:
app.use("/auth", auth);
app.use("/cookieAuth", cookieAuth);
app.use("/posts", postsRouter);
app.use("/user", user);

//static from client:
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
