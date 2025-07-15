import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";
import errorLogger from "./error-logger.middleware";
import requestLogger from "./request-logger.middleware";

const fsPromises = fs.promises;

// A builder function for a logger
const createLogger = async (message: string, logName: string) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..//..//..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..//..//..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..//..//..", "logs", logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

export { errorLogger, requestLogger, createLogger };
