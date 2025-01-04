import rateLimit from "express-rate-limit";
import { Request } from "express";

export const queriesLimiter = rateLimit({
  windowMs: 60 * 2000, //block user's queries for minute
  max: 50, //max 30 queries per minute
  message: "Przekroczyłeś limit zapytań, spróbuj ponownie później.",
  keyGenerator: (req: Request) => {
    const ipv4 = req?.ip?.split(":").pop();
    const key = ipv4?.replace(/\./g, "");
    return key || "0";
  },
});
