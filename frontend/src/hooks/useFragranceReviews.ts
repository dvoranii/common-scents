import { useState } from "react";
import { summarizeFragranceReviews } from "../services/api.service";
import { getSavedFragranceUrl } from "../services/cache.service";

export const useFragranceReviews = () => {
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);
  const [reviewsSummary, setReviewsSummary] = useState<string | null>(null);

  const handleSummarizeReviews = async (url?: string) => {
    setIsReviewsLoading(true);
    try {
      const fragranceUrl = url || getSavedFragranceUrl();
      if (!fragranceUrl) throw new Error("Fragrance URL not available");

      const data = await summarizeFragranceReviews(fragranceUrl);
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
