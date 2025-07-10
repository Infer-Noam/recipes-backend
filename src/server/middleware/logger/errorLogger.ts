//import { createLogger } from "./index";
import { createLogger } from "./index";
import type { ErrorRequestHandler } from "express";

const errorLogger: ErrorRequestHandler = (err, _, res, next) => {
  createLogger(`${err.name}: ${err.message}`, "errorLog.txt");
  console.error(err.stack);
  res.status(500).send(err.message);
  next();
};

export default errorLogger;
