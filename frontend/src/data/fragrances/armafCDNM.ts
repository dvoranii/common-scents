import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import ClubDeNuitManBottle from "/assets/images/FragranceReviews/FragranceBottles/armaf-cdnm.png";
import ClubDeNuitManThumbnailDesktop from "/assets/images/FragranceThumbnails/armaf-cdnm.webp";
import ClubDeNuitManThumbnailMobile from "/assets/images/FragranceThumbnails/armaf-cdnm-mobile.webp";
import ArmafLogo from "/assets/images/FragranceReviews/FragranceLogos/Armaf_Logo.png";

export const armafClubDeNuitMan: Fragrance = {
  id: "3",
  slug: "armaf-club-de-nuit-man",
  name: "Club De Nuit Man",
  house: "Armaf",
  houseLogo: ArmafLogo,
  releaseYear: 2015,
  concentration: "EDT",
  price: 30,
  seasons: ["Autumn", "Winter"],
  occasion: ["Date Night", "Night Out", "Daily Driver", "Evening"],
  category: ["Spicy", "Oriental", "Sweet"],
  categorySlugs: ["spicy", "oriental"],
  thumbnailImage: ClubDeNuitManThumbnailDesktop,
  thumbnailDesktop: ClubDeNuitManThumbnailDesktop,
  thumbnailMobile: ClubDeNuitManThumbnailMobile,
  heroImage: ClubDeNuitManBottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Armaf/Club-de-Nuit-Man-27687.html",
  youtubeUrl: "",
  longevity: 8,
  sillage: 7.5,
  versatility: 8,
  longevityStages: [
    { name: "Opening", value: "0 - 1hr" },
    { name: "Heart", value: "1hr - 4hr" },
    { name: "Drydown", value: "4hr - 8hr" },
  ],
  projection: 7,
  rating: 4.0,
  ratingCount: "671",
  shortDescription:
    "A warm, spicy-sweet powerhouse often compared to Paco Rabanne 1 Million. Great performance for evening wear.",

  accords: [
    createAccord("warmSpicy", "85%"),
    createAccord("freshSpicy", "68%"),
    createAccord("citrus", "60%"),
    createAccord("amber", "57.6583%"),
    createAccord("cinnamon", "57.6583%"),
    createAccord("woody", "48.1812%"),
  ],

  notes: {
    top: [getNote("Mandarin Orange"), getNote("Grapefruit"), getNote("Mint")],
    middle: [
      getNote("Cinnamon"),
      getNote("Cloves"),
      getNote("Ginger"),
      getNote("Pepper"),
    ],
    base: [
      getNote("Amber"),
      getNote("Spicy Notes"),
      getNote("Woody Notes"),
      getNote("Leather"),
      getNote("Patchouli"),
    ],
  },
};
