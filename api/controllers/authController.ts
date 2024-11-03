import { Request, Response } from "express";
import db from "../mysqlConnection";
import bcrypt from "bcrypt";
import { env } from "process";
import jwt from "jsonwebtoken";

//*REGISTER LOGIC*
export const register = async (req: Request, res: Response) => {
  const { username, password, rePassword, acceptTerm } = req.body;

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
  } else if (acceptTerm === false) {
    res.status(409).json({
      field: "acceptTermErr",
      message: "Musisz zakaceptować regulamin",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 8);

    await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    res.send(`User created: ${username}`);
    console.log(`User created: ${username}`);
  }
};

//*LOG IN LOGIC*
export const login = async (req: Request, res: Response) => {
  const { username, password, noLogout } = req.body;

  const [findUser] = await db.query("SELECT * FROM users WHERE username=(?)", [
    username,
  ]);
  // "FindUser" returns an array of objects. In this case there is one object, with user's data.
  // The query "WHERE username = loginData.username" should return only one object.
  if (findUser.length > 0) {
    const [
      {
        username: findUser_username,
        password: findUser_password,
        id: finUser_userid,
      },
    ] = findUser;

    const isPasswordCorrect = await bcrypt.compare(password, findUser_password);

    if (isPasswordCorrect) {
      const secret = process.env.SECRET;

      if (secret) {
        const token = jwt.sign(
          {
            username: findUser_username,
            userid: finUser_userid,
          },
          secret
        );

        if (noLogout) {
          res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10000 * 60 * 60 * 24 * 1024,
          });
        } else
          res.cookie("token", token, {
            httpOnly: true,
          });
        console.log("utworzono ciastko");
      } else {
        console.log("env secret err");
      }

      res.send(`${username} logged in`);
      console.log(`${username} logged in`);
    } else {
      res.status(409).json({ message: "Zła nazwa lub hasło" });
    }
  } else {
    res.status(409).json({ message: "Zła nazwa lub hasło" });
  }
};

//*LOG OUT LOGIC*
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200);
  res.redirect("/");
};
