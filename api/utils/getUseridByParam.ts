import { Request } from "express";

const getUseridByParams = (req: Request) => {
  return Number(req.params.userid);
};

export default getUseridByParams;
