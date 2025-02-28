import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const checkUserAuthorization = (
  getUserId: (req: Request, res: Response) => number | Promise<number>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.body.decodedToken;

    const { userid } = decodedToken;

    try {
      const foundUserId =
        getUserId(req, res) instanceof Promise
          ? await getUserId(req, res)
          : getUserId(req, res);

      if (userid === foundUserId) {
        next();
      } else {
        res
          .status(500)
          .json({ message: "User is not authorized to perform this action" });
      }
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};

export default checkUserAuthorization;
