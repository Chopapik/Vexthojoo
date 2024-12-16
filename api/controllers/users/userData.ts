import { Request, Response } from "express";
import db from "../../mysqlConnection";

const userData = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const [userData] = await db.query(
      "SELECT username,avatarPath,whenRegist,whenLastLogged FROM users WHERE username=?",
      [username]
    );

    if (userData.length > 0) {
      res.json({ userData });
    } else {
      res.status(404).json({
        message: "Nie znaleziono użytkowinka",
        notFoundUsername: username,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Błąd połaczenia z serwerem",
    });
  }
};

export default userData;
