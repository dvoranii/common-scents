import { Router } from "express";
import { summarizeFragranceReviews } from "../controllers/fragrance.controller";
import { validateFragranticaUrl } from "../middlewares/validateFragranticaUrl";

const fragranceRouter = Router();

fragranceRouter.post(
  "/fragrance/reviews",
  validateFragranticaUrl,
  summarizeFragranceReviews
);

export default fragranceRouter;
