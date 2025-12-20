import fs from "fs";
import path from "path";

const BASE_URL = "https://commonscentshq.com";

const occasions = [
  "date-night",
  "daily-driver",
  "night-out",
  "formal",
  "office",
  "active-gym",
];
const seasons = ["summer", "winter", "spring", "autumn"];
const categories = [
  "woody",
  "fresh-citrus",
  "floral",
  "oriental",
  "spicy",
  "fougere",
  "gourmande",
  "chypre",
  "niche",
];

const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/occasions", priority: "0.8", changefreq: "monthly" },
  { url: "/seasons", priority: "0.8", changefreq: "monthly" },
  { url: "/categories", priority: "0.8", changefreq: "monthly" },
  { url: "/fragrance-reviews", priority: "0.9", changefreq: "weekly" },
  { url: "/guides", priority: "0.8", changefreq: "weekly" },
  { url: "/academy", priority: "0.8", changefreq: "weekly" },
  { url: "/about", priority: "0.5", changefreq: "monthly" },
  { url: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
];

const dynamicPages = [
  ...occasions.map((slug) => ({
    url: `/occasions/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  ...seasons.map((slug) => ({
    url: `/seasons/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  ...categories.map((slug) => ({
    url: `/categories/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
];

const allPages = [...staticPages, ...dynamicPages];

const lastmod = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
console.log("✓ Sitemap generated successfully!");
