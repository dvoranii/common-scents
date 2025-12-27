import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import Afnan9pmThumbnailDesktop from "/assets/images/FragranceThumbnails/Afnan-9pm.webp";
import Afnan9pmThumbnailMobile from "/assets/images/FragranceThumbnails/Afnan-9pm-mobile.webp";

import Afnan9pmBottle from "/assets/images/FragranceReviews/FragranceBottles/9PM.png";
import AfnanLogo from "/assets/images/FragranceReviews/FragranceLogos/Afnan_Logo.webp";
import GaelMonteroImg from "/assets/images/FragranceReviews/Perfumers/Gael-Montero.png";

export const afnan9pm: Fragrance = {
  id: "1",
  slug: "afnan-9pm",
  name: "9PM",
  house: "Afnan",
  houseLogo: AfnanLogo,
  perfumers: [{ name: "Gael Montero", image: GaelMonteroImg }],
  releaseYear: 2020,
  concentration: "EDP",
  price: 35,
  seasons: ["Autumn", "Winter"],
  seasonSlugs: ["Autumn", "Winter"],
  occasion: ["Date Night", "Night Out"],
  occasionSlugs: ["date-night", "night-out"],
  category: ["Oriental", "Gourmande"],
  categorySlugs: ["oriental", "gourmande"],
  thumbnailImage: Afnan9pmThumbnailDesktop,
  thumbnailDesktop: Afnan9pmThumbnailDesktop,
  thumbnailMobile: Afnan9pmThumbnailMobile,
  heroImage: Afnan9pmBottle,
  fragranticaUrl: "https://www.fragrantica.com/perfume/Afnan/9pm-65414.html",
  youtubeUrl: "",
  longevity: 8,
  longevityStages: [
    { name: "Opening", value: "0 - 2hr" },
    { name: "Heart", value: "2hr - 6hr" },
    { name: "Drydown", value: "6hr - 10hr" },
  ],
  projection: 9,
  sillage: 8.5,
  versatility: 6.5,
  rating: 4.4,
  ratingCount: "13,843",
  shortDescription:
    "A sophisticated evening scent that punches above its price point. Often called the best Ultramale clone.",

  accords: [
    createAccord("vanilla", "100%"),
    createAccord("amber", "63%"),
    createAccord("warmSpicy", "60%"),
    createAccord("fruity", "56%"),
    createAccord("cinnamon", "55%"),
    createAccord("sweet", "54%"),
    createAccord("lavender", "53%"),
    createAccord("aromatic", "50%"),
    createAccord("fresh", "50%"),
    createAccord("powdery", "50%"),
  ],

  notes: {
    top: [
      getNote("Green Apple"),
      getNote("Cinnamon"),
      getNote("Wild Lavender"),
      getNote("Bergamot"),
    ],
    middle: [getNote("Orange Blossom"), getNote("Lily of the Valley")],
    base: [
      getNote("Vanilla"),
      getNote("Tonka Bean"),
      getNote("Amber"),
      getNote("Patchouli"),
    ],
  },
};
