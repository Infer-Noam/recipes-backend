import allowedOrigins from "./allowedOrigins";
// Cross origin resource sharing (Frontend domain included!!!)
import type { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
