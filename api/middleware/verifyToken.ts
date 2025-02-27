import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  const secret = process.env.SECRET;

  if (!token) {
    res.status(500).json({ message: "Authentication token is missing" });
    return;
  }
  if (!secret) {
    res
      .status(500)
      .json({ message: "Server configuration error: secret is missing" });
    return;
  }

  jwt.verify(token, secret, (error: any, decoded: any) => {
    if (error) {
      res.status(500).json({ message: "Invalid token" });
      return;
    }
    req.body.decodedToken = decoded;
    next();
  });
};

export default verifyToken;
