import allowedOrigins from "../config/allowedOrigins";
import type { RequestHandler } from "express";

const credentials: RequestHandler = (req, res, next) => {
  const origin = req.headers.origin ?? "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  next();
};

export default credentials;
