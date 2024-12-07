import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200);
  res.redirect("/");
};

export default logout;
