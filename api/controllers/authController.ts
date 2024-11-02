import { Request, Response } from "express";
import db from "../mysqlConnection";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { username, password, rePassword } = req.body;

  // "rePassword is variable that checks if user types password correctly"

  //Checking if username has been taken:
  const [foundUser] = await db.query(
    "SELECT username FROM users WHERE username=(?)",
    [username]
  );

  if (foundUser.length > 0) {
    res
      .status(409)
      .json({ field: "usernameErr", message: "Nazwa jest już zajęta" });
    console.log(`"${username}" username has been used`);
  } else if (username.length > 20) {
    res
      .status(409)
      .json({ field: "usernameErr", message: "Nazwa jest za długa" });
    console.log(`"${username}" username too long`);
  } else if (password !== rePassword) {
    res
      .status(409)
      .json({ field: "passwordErr", message: "Hasła się nie zgadzają" });
    console.log(`"${username}" user's password doesn't match`);
  } else {
    const hashedPassword = await bcrypt.hash(password, 8);

    await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    console.log(`User created: ${username}`);
  }
};

export const login = async (req: Request, res: Response) => {};
