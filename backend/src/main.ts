import express from "express";
import cors from "cors";
import helmet from "helmet";
import { json } from "body-parser";
import fragranceRouter from "./routes/fragrance.routes";
import {
  apiRateLimiter,
  speedLimiter,
  validateRequestSize,
  checkDailyLimit,
  dailyRequestCount,
} from "./middlewares/security.middleware";
import { getKillSwitchStatus } from "./utils/killswitch";

const app = express();

app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);

app.use(helmet());

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
      "http://localhost:4173",
    ].filter(Boolean) as string[],
    credentials: true,
  })
);

app.use(json({ limit: "10kb" }));

app.use("/api/fragrance/reviews", checkDailyLimit);

app.use(
  "/api/fragrance/reviews",
  validateRequestSize,
  speedLimiter,
  apiRateLimiter
);

app.use("/api", fragranceRouter);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    dailyRequests: dailyRequestCount,
    killSwitch: getKillSwitchStatus(),
  });
});

app.post("/admin/killswitch/activate", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    const authHeader = req.headers["authorization"];
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken) {
      console.error("[ADMIN] ADMIN_TOKEN not set in environment");
      return res.status(500).json({ error: "server configuration error" });
    }

    if (authHeader !== `Bearer ${adminToken}`) {
      console.warn(`[ADMIN] Unauthorized kill switch attempt from ${req.ip}`);
      return res.status(401).json({ error: "Unathorized" });
    }
  }

  const { reason } = req.body;

  const { activateKillSwitch } = require("./utils/killswitch");
  activateKillSwitch(reason || "Manual activation");

  res.json({
    message: "Kill switch activated",
    status: getKillSwitchStatus(),
  });
});

app.post("/admin/killswitch/deactivate", (req, res) => {
  // Same authentication check
  if (process.env.NODE_ENV === "production") {
    const authHeader = req.headers["authorization"];
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken) {
      console.error("[ADMIN] ADMIN_TOKEN not set in environment");
      return res.status(500).json({ error: "Server configuration error" });
    }

    if (authHeader !== `Bearer ${adminToken}`) {
      console.warn(
        `[ADMIN] Unauthorized kill switch deactivation attempt from ${req.ip}`
      );
      return res.status(401).json({ error: "Unauthorized" });
    }
  }

  // Dynamically import to avoid circular dependencies
  const { deactivateKillSwitch } = require("./utils/killswitch");
  deactivateKillSwitch();

  res.json({
    message: "Kill switch deactivated",
    status: getKillSwitchStatus(),
  });
});

app.use((_req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(
      `[ERROR] ${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}:`,
      err.message
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.status(500).json({
      error: isProduction ? "Internal server error" : err.message,
      ...(!isProduction && { stack: err.stack }),
    });
  }
);

export default app;
