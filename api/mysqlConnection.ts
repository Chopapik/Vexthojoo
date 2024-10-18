import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.DBPASSWORD,
  port: Number(process.env.DBPORT),
});

export default db;
