import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import httpStatus from "http-status";
import path from "path";
import APIError from "../Utils/errors/APIErrorHandler.js";
import AppError from "../Utils/errors/CustomErrorHandler.js";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import routes from "../routes/songRoutes.js";

const app = express();

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Promise Rejection:", error);
  process.exit(1);
});

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "carondemand-session",
    keys: ["key1", "key2"],
  })
);
app.use("/api", routes);

// 404 - Endpoint not found
app.use((req, res, next) => {
  const notFoundError = new AppError(
    "Endpoint not found",
    httpStatus.NOT_FOUND
  );
  next(notFoundError);
});

// Catch errors passed from controllers
app.use((err, req, res, next) => {
  // Change error caught to customErrorHandler if the instance is not CustomErrorHandler
  if (!(err instanceof APIError)) {
    const newError = new APIError(
      err.message || "An unknown error occurred",
      httpStatus.INTERNAL_SERVER_ERROR
    );

    next(newError);
  }

  next(err);
});

// Handle specific errors or error types
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    const jsonParseError = new APIError("Syntax error", httpStatus.BAD_REQUEST);
    next(jsonParseError);
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    status: err.status,
    message: err.message || "Internal server error",
    stack: err.stack,
  });
});

export default app;
