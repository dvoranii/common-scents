import * as Puppeteer from "puppeteer";

class ScraperService {
  private browser: Puppeteer.Browser | null = null;
  private page: Puppeteer.Page | null = null;

  async initialize() {
    this.browser = await Puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1280, height: 800 });
    await this.page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );
  }

  async scrapeFragranceReviews(
    url: string,
    count: number = 10
  ): Promise<any[]> {
    if (!this.page) throw new Error("Page not initialized");

    try {
      await this.page.goto(`${url}#all-reviews`, {
        waitUntil: "domcontentloaded",
      });
      await this.page.waitForSelector(".fragrance-review-box", {
        timeout: 5000,
      });

      return await this.page.evaluate((count) => {
        const reviews = [];
        const reviewElements = document.querySelectorAll(
          ".fragrance-review-box"
        );

        for (let i = 0; i < Math.min(count, reviewElements.length); i++) {
          const review = reviewElements[i];
          const ratingElement = review.querySelector(".perfume-vote-box");
          const rating = ratingElement
            ? ratingElement
                .querySelector("[rating-vote]")
                ?.getAttribute("rating-vote")
            : null;
          const author =
            review
              .querySelector('[itemprop="author"] [itemprop="name"]')
              ?.getAttribute("content") || "";
          const date =
            review
              .querySelector('[itemprop="datePublished"]')
              ?.getAttribute("content") || "";
          const text =
            review
              .querySelector('[itemprop="reviewBody"]')
              ?.textContent?.trim() || "";

          reviews.push({
            author,
            date,
            rating: rating ? parseInt(rating) : null,
            text,
          });
        }

        return reviews;
      }, count);
    } catch (error) {
      console.error("Error scraping reviews:", error);
      throw error;
    }
  }

  async close() {
    if (this.page) await this.page.close();
    if (this.browser) await this.browser.close();
  }
}

export const scraperService = new ScraperService();
