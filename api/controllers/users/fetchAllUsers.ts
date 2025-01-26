import db from "../../mysqlConnection";
import { Request, Response } from "express";

const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await db.query(
      "SELECT u.username, u.avatarPath, u.whenRegist, u.whenLastLogged, p.numberOfPostByUser FROM users u JOIN (SELECT user_id, COUNT(p.id) AS numberOfPostByUser FROM posts p GROUP BY user_id) p ON u.id = p.user_id ORDER BY u.username ASC"
    );

    console.log(allUsers);
    res.status(200).json({ allUsers: allUsers[0] });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
    console.log(errorMessage);
  }
};

export default fetchAllUsers;
