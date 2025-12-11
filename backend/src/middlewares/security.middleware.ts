import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import { Request, Response, NextFunction } from "express";

export let dailyRequestCount = 0;
let lastReset = Date.now();

const DAILY_GLOBAL_LIMIT = 500;
const DAILY_RESET_MS = 24 * 60 * 60 * 1000;

const checkDailyLimit = (_req: Request, res: Response, next: NextFunction) => {
  const now = Date.now();

  if (now - lastReset > DAILY_RESET_MS) {
    dailyRequestCount = 0;
    lastReset = now;
    console.log(
      `[SECURITY] Daily counter reset at ${new Date().toISOString()}`
    );
  }

  if (dailyRequestCount >= DAILY_GLOBAL_LIMIT) {
    console.warn(
      `[SECURITY] Daily global limit reached. Count: ${dailyRequestCount}`
    );
    return res.status(429).json({
      error: "Daily service limit reached. Please try again tomorrow.",
      code: "DAILY_LIMIT_EXCEEDED",
    });
  }

  dailyRequestCount++;
  next();
};

export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  message: {
    error: "Too many requests. Please try again in 15 minutes.",
    code: "RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.url === "/health",
});

export const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 3,
  delayMs: () => 500,
  maxDelayMs: 3000,
  validate: { delayMs: false },
  skip: (req) => req.url === "/health",
});

export const validateRequestSize = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contentLength = parseInt(req.headers["content-length"] || "0");

  if (contentLength > 10240) {
    return res.status(413).json({
      error: "Request too large. Maximum size is 10KB",
      code: "PAYLOAD_TOO_LARGE",
    });
  }

  next();
};

export { checkDailyLimit };
