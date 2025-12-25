import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import JPGElixirBottle from "/assets/images/FragranceReviews/FragranceBottles/JPG-Elixir.png";
import JPGElixirThumbnail from "/assets/images/FragranceThumbnails/JPG-Elixir.webp";
import JPGLogo from "/assets/images/FragranceReviews/FragranceLogos/JPG_Logo.png";

import QuentinBischImg from "/assets/images/FragranceReviews/Perfumers/Quentin-Bisch.webp";

export const jpgElixir: Fragrance = {
  id: "2",
  slug: "jpg-le-male-elixir",
  name: "Le Male Elixir",
  house: "Jean Paul Gaultier",
  houseLogo: JPGLogo,
  perfumers: [
    {
      name: "Quentin Bisch",
      image: QuentinBischImg,
    },
  ],
  releaseYear: 2023,
  concentration: "EDP",
  price: 160,
  seasons: ["Autumn", "Winter"],
  occasion: ["Date Night", "Night Out"],
  category: ["Oriental", "Gourmande", "Fougère"],
  categorySlugs: ["oriental", "gourmande", "fougere"],
  thumbnailImage: JPGElixirThumbnail,
  heroImage: JPGElixirBottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html",
  youtubeUrl: "",
  longevity: 8.5,
  longevityStages: [
    { name: "Opening", value: "0 - 2hr" },
    { name: "Heart", value: "2hr - 8hr" },
    { name: "Drydown", value: "8hr - 14hr+" },
  ],
  projection: 8.5,
  sillage: 8,
  versatility: 6,
  rating: 4.53,
  ratingCount: "1,102",
  shortDescription:
    "A high-quality, invigorating fresh scent with sharp citrus and aromatic notes. Perfect for the office or a warm-weather daily driver, offering a clean, professional aroma.",

  accords: [
    createAccord("vanilla", "100%"),
    createAccord("sweet", "81%"),
    createAccord("honey", "70.39%"),
    createAccord("aromatic", "60%"),
    createAccord("amber", "59.45%"),
    createAccord("lavender", "53.9%"),
    createAccord("green", "48.2%"),
    createAccord("freshSpicy", "46.27%"),
    createAccord("powdery", "45.8%"),
  ],

  notes: {
    top: [getNote("Lavender"), getNote("Mint")],
    middle: [getNote("Vanilla"), getNote("Benzoin")],
    base: [getNote("Honey"), getNote("Tonka Bean"), getNote("Tobacco")],
  },
};
