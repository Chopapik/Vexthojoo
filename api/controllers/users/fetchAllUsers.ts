import db from "../../mysqlConnection";
import { Request, Response } from "express";

const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await db.query(
      "SELECT * FROM users ORDER BY username ASC"
    );

    console.log(allUsers);

    res.status(200).json({ allUsers: allUsers[0] });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default fetchAllUsers;
