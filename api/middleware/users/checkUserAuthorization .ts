import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const checkUserAuthorization = (userid: (req: Request) => number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    const secret = process.env.secret;

    if (!token) {
      res.status(401).json({ message: "No token provided" });
    } else if (!secret) {
      res.status(401).json({ message: "No secret provided" });
    } else {
      try {
        const decodedToken = jwt.verify(token, secret);
        const decodedUserid = (decodedToken as jwt.JwtPayload).userid;

        if (decodedUserid === userid(req)) {
          next();
        } else {
          res
            .status(403)
            .json({ message: "User is not authorized to perform this action" });
        }
      } catch (error) {
        res.status(401).json({ message: "Invalid token" });
      }
    }
  };
};

export default checkUserAuthorization;
