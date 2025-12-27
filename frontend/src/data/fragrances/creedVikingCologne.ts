import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import VikingCologneThumbnailDesktop from "/assets/images/FragranceThumbnails/viking-cologne.webp";
import VikingCologneThumbnailMobile from "/assets/images/FragranceThumbnails/viking-cologne-mobile.webp";

import VikingCologneBottle from "/assets/images/FragranceReviews/FragranceBottles/VikingCologne.png";
import CreedLogo from "/assets/images/FragranceReviews/FragranceLogos/Creed_Logo.png";
import ErwinCreedImg from "/assets/images/FragranceReviews/Perfumers/Erwin-Creed.webp";
import OlivierCreedImg from "/assets/images/FragranceReviews/Perfumers/Olivier-Creed.jpg";

export const creedVikingCologne: Fragrance = {
  id: "4",
  slug: "creed-viking-cologne",
  name: "Viking Cologne",
  house: "Creed",
  houseLogo: CreedLogo,
  perfumers: [
    {
      name: "Erwin Creed",
      image: ErwinCreedImg,
    },
    {
      name: "Olivier Creed",
      image: OlivierCreedImg,
    },
  ],
  releaseYear: 2021,
  concentration: "EDP",
  price: 350,
  seasons: ["Spring", "Summer"],
  occasion: ["Formal", "Office", "Daily Driver"],
  category: ["Fresh", "Citrus", "Aromatic"],
  categorySlugs: ["fresh-citrus", "fougere"],
  thumbnailImage: VikingCologneThumbnailDesktop,
  thumbnailDesktop: VikingCologneThumbnailDesktop,
  thumbnailMobile: VikingCologneThumbnailMobile,
  heroImage: VikingCologneBottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Creed/Viking-Cologne-67039.html",
  youtubeUrl: "",
  longevity: 6,
  longevityStages: [
    { name: "Opening", value: "0 - 1.5hr" },
    { name: "Heart", value: "1.5hr - 4hr" },
    { name: "Drydown", value: "4hr - 6hr" },
  ],
  projection: 7,
  sillage: 7,
  versatility: 7,
  rating: 4.0,
  ratingCount: "1,102",
  shortDescription:
    "The most overhated Creed fragrance. Viking Cologne is actually a solid fresh scent if you can get past the hate.",

  accords: [
    createAccord("aromatic", "100%"),
    createAccord("citrus", "85%"),
    createAccord("freshSpicy", "75%"),
    createAccord("woody", "70%"),
    createAccord("lavender", "55%"),
    createAccord("herbal", "49.5%"),
    createAccord("softSpicy", "48.1565%"),
    createAccord("earthy", "44.3237%"),
    createAccord("warmSpicy", "44.3176%"),
  ],

  notes: {
    top: [
      getNote("Mandarin Orange"),
      getNote("Lemon"),
      getNote("Pink Pepper"),
      getNote("Bergamot"),
    ],
    middle: [
      getNote("Lavender"),
      getNote("Geranium"),
      getNote("Rosemary"),
      getNote("Sage"),
      getNote("Nutmeg"),
    ],
    base: [
      getNote("Vetiver"),
      getNote("Cedar"),
      getNote("Sandalwood"),
      getNote("Patchouli"),
      getNote("Olibanum"),
    ],
  },
};
