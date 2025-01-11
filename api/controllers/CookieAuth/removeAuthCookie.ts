import { Response, Request } from "express";

const removeAuthCookie = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.end();
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export default removeAuthCookie;
