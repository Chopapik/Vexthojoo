import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import db from "../../mysqlConnection";
import bcrypt from "bcrypt";

const updateUserPassword = async (req: Request, res: Response) => {
  const passwordUpdateData = req.body;
  const { newPassword, newPasswordRepeated, oldPassword } = passwordUpdateData;

  const cookieAuthToken = req.cookies.token;
  const secret = process.env.SECRET;

  // Passwords validation

  // Check if every password is filled
  if (!newPassword || !newPasswordRepeated || !oldPassword) {
    res.status(401).json({
      field: "allPasswords",
      message: "Nie uzupełniono wszystkich pól",
    });
    return;
  }

  // Check that new and repeated passwords are the same
  if (newPassword !== newPasswordRepeated) {
    res
      .status(400)
      .json({ field: "newPassword", message: "Hasła się nie zgadzają" });
    return;
  }

  if (cookieAuthToken && secret) {
    try {
      //Check if old password is correct
      const decodedToken = jwt.verify(
        cookieAuthToken,
        secret
      ) as jwt.JwtPayload;
      const { userid } = decodedToken;

      const [rows] = await db.query("SELECT password FROM users WHERE id=?", [
        userid,
      ]);

      const userCodedPassword = rows[0].password;

      const isOldPasswordCorrect = await bcrypt.compare(
        oldPassword,
        userCodedPassword
      );

      if (isOldPasswordCorrect) {
        const hashedNewPassword = await bcrypt.hash(newPassword, 8);

        //If old password is correct, replace old password in database with new one
        await db.query("UPDATE users SET password=? WHERE id=?", [
          hashedNewPassword,
          decodedToken?.userid,
        ]);

        res.status(200).json({ message: "Pomyślnie zaktualizowano hasło" });
      } else {
        res.status(401).json({ field: "oldPassword", message: "Złe hasło" });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Nieznany błąd serwera" });
      }
    }
  } else {
    res.status(500).json({ message: "Token authorization error" });
  }

  return;
};

export default updateUserPassword;
