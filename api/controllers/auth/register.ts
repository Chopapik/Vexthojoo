import { Request, Response } from "express";
import db from "../../mysqlConnection";
import bcrypt from "bcrypt";

const register = async (req: Request, res: Response) => {
  const { username, password, rePassword, acceptTerm } = req.body;

  // "rePassword is variable that checks if user types password correctly"

  try {
    if (username.includes(" ")) {
      res.status(409).json({
        field: "usernameError",
        message: "Nazwa nie moze zawierać spacji",
      });
      return;
    }

    if (!username || username.trim().length === 0) {
      res
        .status(409)
        .json({ field: "usernameError", message: "Nazwa nie moze być pusta" });
      return; // Add return to stop further execution if username is empty
    }

    if (!password) {
      res
        .status(409)
        .json({ field: "passwordError", message: "Hasło nie może być puste" });
      return; // Add return to stop further execution if password is empty
    }

    const [blockedUsernames] = await db.query(
      "SELECT usernames FROM blockedUsernames"
    );

    //Checking if username isn't block
    const isUsernameBlocked = blockedUsernames.some(
      (blockedUsername: string) => blockedUsername === username
    );

    if (isUsernameBlocked) {
      res
        .status(409)
        .json({ field: "usernameError", message: "Nazwa jest już zajęta" });
      return;
    }

    //Checking if username has been taken:
    const [foundUser] = await db.query(
      "SELECT username FROM users WHERE username=(?)",
      [username]
    );

    if (foundUser.length > 0) {
      res
        .status(409)
        .json({ field: "usernameError", message: "Nazwa jest już zajęta" });
      return;
    } else if (username.length > 20) {
      res
        .status(409)
        .json({ field: "usernameError", message: "Nazwa jest za długa" });
      return;
    } else if (password !== rePassword) {
      res
        .status(409)
        .json({ field: "passwordError", message: "Hasła się nie zgadzają" });
      return;
    } else if (acceptTerm === false) {
      res.status(409).json({
        field: "acceptTermErr",
        message: "Musisz zakaceptować regulamin",
      });
      return;
    } else {
      const hashedPassword = await bcrypt.hash(password, 8);

      const whenRegist = new Date();

      await db.query(
        "INSERT INTO users (username, password, whenRegist) VALUES (?, ?, ?)",
        [username, hashedPassword, whenRegist]
      );

      res.send(`User created: ${username}`);
      console.log(`User created: ${username}`);
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default register;
