import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import createError from "http-errors";
import ejs from "ejs";
import db from "./mysqlConnection";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));

const port: number = 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
