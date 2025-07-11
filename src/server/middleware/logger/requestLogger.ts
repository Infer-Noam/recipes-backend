//import { createLogger } from "./index";
import { createLogger } from "./index";
import type { RequestHandler } from "express";

const requestLogger: RequestHandler = (req, _, next) => {
  createLogger(
    `${req.method}\t${req.headers.origin}\t${req.url}`,
    "reqLog.txt",
  );
  next();
};

export default requestLogger;
