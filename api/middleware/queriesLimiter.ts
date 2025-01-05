import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

export const queriesLimiter = rateLimit({
  windowMs: 60 * 2000, //block user's queries for minute
  max: 30, //max 30 POST queries per minute
  keyGenerator: (req: Request) => {
    const ipv4 = req?.ip?.split(":").pop();
    const key = ipv4?.replace(/\./g, "");
    return key || `default-${req?.ip}`;
  },
  skip: (req: Request) => req.method !== "POST",
  handler: (req: Request, res: Response) => {
    //while user is blocked, error will be responsed
    res.status(429).json({
      field: "critical",
      message: "Przekroczono limit zapytań, spróbuj ponownie później.",
    });
  },
});

export const addPostsLimiter = rateLimit({
  windowMs: 60 * 5000, //block user's queries for minute
  max: 2, //max 30 POST queries per minute
  keyGenerator: (req: Request) => {
    const ipv4 = req?.ip?.split(":").pop();
    const key = ipv4?.replace(/\./g, "");
    return key || `default-${req?.ip}`;
  },
  skip: (req: Request) => req.method !== "POST",
  handler: (req: Request, res: Response) => {
    //while user is blocked, error will be responsed
    res.status(429).json({
      field: "critical",
      message:
        "Limit liczby postów na minutę został przekroczony. Spróbuj ponownie później.",
    });
  },
});
