import { Router } from "express";
import { subscribeToNewsletter } from "../controllers/newsletter.controller";
import { apiRateLimiter } from "../middlewares/security.middleware";

const newsletterRouter = Router();

newsletterRouter.post(
  "/newsletter/subscribe",
  apiRateLimiter,
  subscribeToNewsletter
);

export default newsletterRouter;
