const BASE_URL = "http://localhost:3001";

export const summarizeFragranceReviews = async (
  url: string,
  numberOfReviews: number
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/fragrance/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ url, numberOfReviews }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to summarize reviews");
    }

    return await response.json();
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Network error when trying to summarize reviews.";
    throw new Error(message);
  }
};
