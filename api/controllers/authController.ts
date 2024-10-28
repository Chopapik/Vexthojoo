import { Request, Response } from "express";
import db from "../mysqlConnection";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const [findUser] = await db.query(
    "SELECT username FROM users WHERE username=(?)",
    [username]
  );

  if (findUser.length > 0) {
    res.json({ message: "Nazwa użytkownika jest już zajęte" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 8);

    await db.query("INSERT INTO users (username,password) VALUES (?,?)", [
      username,
      hashedPassword,
    ]);
    console.log(`utworzono użytkownika: ${username}`);
  }
};
