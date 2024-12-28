import { Response, Request } from "express";

const removeAuthCookie = (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.end();
  } catch (error) {
    console.log(error);
  }
};

export default removeAuthCookie;
