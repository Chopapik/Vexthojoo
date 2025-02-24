import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const checkUserAuthorization = (
  getUserId: (req: Request, res: Response) => number | Promise<number>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    const secret = process.env.secret;

    if (!token) {
      res.status(401).json({ message: "No token provided" });
    } else if (!secret) {
      res.status(401).json({ message: "No secret provided" });
    } else {
      try {
        const foundUserId =
          getUserId(req, res) instanceof Promise
            ? await getUserId(req, res)
            : getUserId(req, res);

        const decodedToken = jwt.verify(token, secret);
        const decodedUserid = (decodedToken as jwt.JwtPayload).userid;

        console.log("token id: ", decodedUserid);
        console.log("userid", foundUserId);

        if (decodedUserid === foundUserId) {
          next();
        } else {
          res
            .status(500)
            .json({ message: "User is not authorized to perform this action" });
        }
      } catch (error) {
        res.status(401).json({ message: "Invalid token" });
      }
    }
  };
};

export default checkUserAuthorization;
