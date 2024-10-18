import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "",
  password: "password",
  port: 3307,
});

console.log("Connected to db");
export default db;
