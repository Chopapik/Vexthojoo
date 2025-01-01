import { Response, Request } from "express";

const removeAuthCookie = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.end();
  } catch (error) {
    res.status(500).json({ message: "Błąd serwera" });
    console.log(error);
  }
};

export default removeAuthCookie;
