import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import BR540Bottle from "/assets/images/FragranceReviews/FragranceBottles/baccarat-rouge-540.png";
import BR540Thumbnail from "/assets/images/FragranceThumbnails/baccarat-rouge-540.webp";
import MFKLogo from "/assets/images/FragranceReviews/FragranceLogos/Logo_MaisonFrancisKurkdjian.png";
import FrancisKurkdjianImg from "/assets/images/FragranceReviews/Perfumers/Francis-Kurkdjian.jpg";

export const br540edp: Fragrance = {
  id: "6",
  slug: "baccarat-rouge-540-edp",
  name: "Baccarat Rouge 540",
  house: "Maison Francis Kurkdjian",
  houseLogo: MFKLogo,
  perfumers: [{ name: "Francis Kurkdjian", image: FrancisKurkdjianImg }],
  releaseYear: 2015,
  concentration: "EDP",
  price: 325,
  seasons: ["Spring", "Autumn", "Winter"],
  occasion: ["Formal", "Night Out", "Date Night"],
  category: ["Oriental", "Floral", "Woody"],
  categorySlugs: ["oriental", "floral", "woody"],
  thumbnailImage: BR540Thumbnail,
  thumbnailMobile: BR540Thumbnail,
  thumbnailDesktop: BR540Thumbnail,
  heroImage: BR540Bottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Baccarat-Rouge-540-33519.html",
  youtubeUrl: "",
  longevity: 9.0,
  longevityStages: [
    { name: "Opening", value: "0 - 1hr" },
    { name: "Heart", value: "1hr - 4hr" },
    { name: "Drydown", value: "4hr - 10hr+" },
  ],
  projection: 8.5,
  sillage: 9.5,
  versatility: 9,
  rating: 4.14,
  ratingCount: "26,456",
  shortDescription:
    "A luminous, airy masterpiece featuring a unique 'burnt sugar' DNA. Known for its incredible sillage and its ability to shimmer on the skin for over 12 hours.",

  accords: [
    createAccord("woody", "100%"),
    createAccord("amber", "90%"),
    createAccord("sweet", "85%"),
    createAccord("warmSpicy", "75%"),
    createAccord("floral", "60%"),
  ],

  notes: {
    top: [getNote("Saffron"), getNote("Jasmine")],
    middle: [getNote("Amberwood"), getNote("Ambergris"), getNote("Hedione")],
    base: [getNote("Cedar")],
  },
};
