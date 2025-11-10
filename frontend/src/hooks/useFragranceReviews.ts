import { useState } from "react";
import { summarizeFragranceReviews } from "../services/api.service";

export const useFragranceReviews = (numberOfReviews: number) => {
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);
  const [reviewsSummary, setReviewsSummary] = useState<string | null>(null);

  const handleSummarizeReviews = async (url?: string) => {
    setIsReviewsLoading(true);
    try {
      if (!url) throw new Error("Fragrance URL not available");

      const data = await summarizeFragranceReviews(url, numberOfReviews);
      setReviewsSummary(data.summary);
    } catch (error: unknown) {
      console.error("Error summarizing reviews", error);

      let errorMessage = "Failed to generate reviews summary.";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      setReviewsSummary(errorMessage);
    } finally {
      setIsReviewsLoading(false);
    }
  };

  return {
    isReviewsLoading,
    reviewsSummary,
    handleSummarizeReviews,
  };
};
