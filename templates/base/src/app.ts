import express from "express";
import { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

function createServer() {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.get("/health", (req: Request, res: Response) => {
    res.send("Server is running!");
  });

  return app;
}

export default createServer;
