import { Request, Response } from "express";
import { scraperService } from "../services/scraper.service";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const summarizeFragranceReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { url, numberOfReviews } = req.body;

    if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
    }

    const MAX_REVIEWS = 25;
    const REVIEW_COUNT = Math.min(numberOfReviews || 10, MAX_REVIEWS);

    console.log(
      `[AI-REQUEST] ${new Date().toISOString()} ${
        req.ip
      } - ${REVIEW_COUNT} reviews`
    );

    const reviews = await scraperService.scrapeFragranceReviews(
      url,
      REVIEW_COUNT
    );

    const safeReviews = reviews.slice(0, MAX_REVIEWS);

    const prompt = `Here are ${
      safeReviews.length
    } recent reviews for this fragrance:
        
        ${safeReviews
          .map((r, i) => `Review ${i + 1} (Rating: ${r.rating}/5): ${r.text}`)
          .join("\n\n")}
        
        Please analyze these reviews and provide:
        1. The overall sentiment breakdown (how many positive, negative, neutral)
        2. Common themes mentioned
        3. A concise summary of the general consensus
        4. Any notable contrasting opinions
        
        Keep the summary under 200 words and avoid any markdown formatting. Also make sure to
        understand when a fragrance is an original, and when it is a clone of another no matter 
        how the reviews are phrased (i.e Creed Aventus is the original and club de nuit intense man by armaf is a clone)`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = result.response;
    const summary = response.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (summary) {
      res.json({ reviews: safeReviews, summary });
    } else {
      res.status(500).json({ error: "Failed to generate review summary" });
    }
  } catch (error) {
    console.error("Review summary error:", error);

    res.status(500).json({
      error: "Failed to summarize reviews",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
