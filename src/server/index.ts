import express from "express";
import credentials from "./middleware/credentials";
import corsOptions from "./config/corsOptions";
import cors from "cors";
import errorLogger from "./middleware/logger/errorLogger";
import requestLogger from "./middleware/logger/requestLogger";
import apiRouter from "./routes/api/index";

const app = express();

// request logger needs to be first so it will log all requests
app.use(requestLogger);

// enable CORS credentials for allowed origins
app.use(credentials);

// built in middleware for resource sharing
app.use(cors(corsOptions));

// built in middleware for json
app.use(express.json());

// built in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api", apiRouter);

// the final route
app.all("/{*catchall}", (req, res) => {
  res.sendStatus(404);
});

// error logger should be after all middleware and routers
app.use(errorLogger);

export default app;
