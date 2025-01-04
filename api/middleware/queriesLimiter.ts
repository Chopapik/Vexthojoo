const rateLimit = require("express-rate-limit");

export const queriesLimiter = rateLimit({
  windowMs: 60 * 2000, //block user's queries for minute
  max: 50, //max 30 queries per minute
  message: "Przekroczyłeś limit zapytań, spróbuj ponownie później.",
});
