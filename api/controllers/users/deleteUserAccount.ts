import { Request, Response } from "express";
import db from "../../mysqlConnection";

const deleteUserAccount = (req: Request, res: Response) => {
  const userIdToRemove = parseInt(req.params.userIdToRemove, 10);

  console.log(`usune uzytkownika ${userIdToRemove}`);

  try {
    db.query(
      "DELETE p FROM posts p JOIN users u ON u.id = p.user_id WHERE u.id = ?",
      [userIdToRemove]
    );

    db.query("DELETE u FROM users u WHERE id = ?", [userIdToRemove]);

    res.end();
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default deleteUserAccount;
