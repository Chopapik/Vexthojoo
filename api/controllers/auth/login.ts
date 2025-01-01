import { Request, Response } from "express";
import db from "../../mysqlConnection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  const { username, password, noLogout } = req.body;

  try {
    const [findUser] = await db.query("SELECT * FROM users WHERE username=?", [
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
          avatarPath: findUser_avatarPath,
        },
      ] = findUser;

      const isPasswordCorrect = await bcrypt.compare(
        password,
        findUser_password
      );

      if (isPasswordCorrect) {
        const secret = process.env.SECRET;

        if (secret) {
          const token = jwt.sign(
            {
              username: findUser_username,
              userid: finUser_userid,
              avatarPath: findUser_avatarPath,
            },
            secret
          );

          const whenLogged = new Date();

          await db.query(
            "UPDATE users SET whenLastLogged = ? WHERE username=?",
            [whenLogged, username]
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
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera" });
    console.log(error);
  }
};

export default login;
