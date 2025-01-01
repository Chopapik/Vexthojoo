import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera" });
    console.log(error);
  }
};

export default logout;
