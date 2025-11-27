import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import next from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextServer = next({
  dev: isDev,
  conf: {
    distDir: ".next",
  },
});

const nextHandler = nextServer.getRequestHandler();

// ⭐ v2 CORRECT SYNTAX — NO .region() ⭐
export const nextServerFunction = onRequest(
  {
    cors: false,
    region: "us-central1", // specify region here, NOT as a method
    maxInstances: 10
  },
  async (req, res) => {
    await nextServer.prepare();
    return nextHandler(req, res);
  }
);
