import mysql from "mysql2/promise";

let db: any;

try {
  db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.DBPASSWORD,
    port: Number(process.env.DBPORT),
  });
  console.log("Database connected");
} catch (err) {
  console.error("Error connecting to the database:", err);
}

export default db;
