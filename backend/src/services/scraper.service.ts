import fetch from "node-fetch";
import * as cheerio from "cheerio";

class ScraperService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.SCRAPER_API_KEY || "";
  }

  async scrapeFragranceReviews(
    url: string,
    count: number = 10
  ): Promise<any[]> {
    console.log(count);
    console.log(url);

    try {
      // Build the ScraperAPI URL
      const scraperUrl = `https://api.scraperapi.com/?api_key=${
        this.apiKey
      }&url=${encodeURIComponent(url + "#all-reviews")}&render=true`;

      // Fetch the page through ScraperAPI
      const response = await fetch(scraperUrl);

      if (!response.ok) {
        throw new Error(`ScraperAPI request failed: ${response.status}`);
      }

      const html = await response.text();

      // Parse HTML with Cheerio
      const $ = cheerio.load(html);
      const reviews: any[] = [];

      $(".fragrance-review-box").each((i, element) => {
        if (i >= count) return false; // Stop after count reviews

        const $review = $(element);
        const $ratingElement = $review.find(".perfume-vote-box");
        const rating = $ratingElement.find("[rating-vote]").attr("rating-vote");

        const author =
          $review
            .find('[itemprop="author"] [itemprop="name"]')
            .attr("content") || "";
        const date =
          $review.find('[itemprop="datePublished"]').attr("content") || "";
        const text =
          $review.find('[itemprop="reviewBody"]').text().trim() || "";

        reviews.push({
          author,
          date,
          rating: rating ? parseInt(rating) : null,
          text,
        });
      });

      return reviews;
    } catch (error) {
      console.error("Error scraping reviews:", error);
      throw error;
    }
  }
}

export const scraperService = new ScraperService();
