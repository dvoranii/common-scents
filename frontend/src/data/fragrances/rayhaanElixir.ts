// src/data/fragrances/rayhaanElixir.ts
import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import RayhaanElixirBottle from "/assets/images/FragranceReviews/FragranceBottles/RayhaanElixir.webp";
import RayhaanElixirThumbnailDesktop from "/assets/images/FragranceThumbnails/RayhaanElixirThumbnail.webp";
import RayhaanElixirThumbnailMobile from "/assets/images/FragranceThumbnails/RayhaanElixirThumbnail.webp";
import RayhaanLogo from "/assets/images/FragranceReviews/FragranceLogos/rayhaan-logo.webp";

export const rayhaanElixir: Fragrance = {
  id: "5",
  slug: "rayhaan-elixir",
  name: "Elixir",
  house: "Rayhaan",
  houseLogo: RayhaanLogo,
  releaseYear: 2023,
  concentration: "EDP",
  price: 45,
  seasons: ["Autumn", "Winter"],
  occasion: ["Date Night", "Night Out"],
  category: ["Oriental", "Gourmande"],
  categorySlugs: ["oriental", "gourmande"],
  thumbnailImage: RayhaanElixirThumbnailDesktop,
  thumbnailMobile: RayhaanElixirThumbnailMobile,
  thumbnailDesktop: RayhaanElixirThumbnailDesktop,
  heroImage: RayhaanElixirBottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Rayhaan/Elixir-89241.html",
  youtubeUrl: "",
  longevity: 8.0,
  longevityStages: [
    { name: "Opening", value: "0 - 1.5hr" },
    { name: "Heart", value: "1.5hr - 6hr" },
    { name: "Drydown", value: "6hr - 10hr+" },
  ],
  projection: 8.0,
  sillage: 7.5,
  versatility: 7,
  rating: 4.4,
  ratingCount: "342", // Added to fix ts(2741)
  shortDescription:
    "A viral, high-performance clone of JPG Le Male Elixir. It captures the honeyed-tobacco and minty-vanilla DNA with surprising accuracy at a fraction of the cost.",
  accords: [
    createAccord("vanilla", "95%"),
    createAccord("sweet", "90%"),
    createAccord("honey", "85%"),
    createAccord("amber", "70%"),
  ],
  notes: {
    top: [getNote("Mint"), getNote("Bergamot")],
    middle: [getNote("Lavender"), getNote("Benzoin")],
    base: [getNote("Vanilla"), getNote("Tonka Bean")],
  },
};
