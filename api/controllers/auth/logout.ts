import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200);
    res.redirect("/");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default logout;
