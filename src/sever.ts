import express, { json, Express } from "express";
import cors from "cors";

export const bootstrap = () => {
  const app: Express = express();

  app
    .use(
      cors({
        origin: "*",
        credentials: true,
        allowedHeaders: [
          "Access-Control-Allow-Origin",
          "Access-Control-Allow-Header",
          "Access-Control-Expose-Headers",
          "Content-Range",
          "Content-Length",
          "Connection",
          "Content-Type",
          "X-Content-Type-Options",
          "Set-Cookies",
          "*",
        ],
        exposedHeaders: ["X-Total-Count", "x-access-token", "x-refresh-token"],
      }),
    )
    .use(json());
  return app;
};
