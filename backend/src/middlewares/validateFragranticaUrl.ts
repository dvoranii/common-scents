import { Request, Response, NextFunction } from "express";

export const validateFragranticaUrl = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  if (!url.includes("fragrantica.com/perfume")) {
    return res.status(400).json({ error: "Invalid Fragrantica URL" });
  }

  next();
};
