// src/data/fragrances/armafClubDeNuitMan.ts
import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import ClubDeNuitManBottle from "../../assets/FragranceReviews/FragranceBottles/armaf-cdnm.png";
import ClubDeNuitManThumbnail from "../../assets/FragranceThumbnails/armaf-cdnm.png";
import ArmafLogo from "../../assets/FragranceReviews/FragranceLogos/Armaf_Logo.png";

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
  occasion: ["Date Night", "Night Out", "Daily Driver", "Evening"],
  category: ["Spicy", "Oriental", "Sweet"],
  categorySlugs: ["spicy", "oriental"],
  thumbnailImage: ClubDeNuitManThumbnail,
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

  // reviewContent: {
  //   overview:
  //     "The often-forgotten sibling, this is Armaf's take on the immensely popular Paco Rabanne 1 Million scent profile. It delivers a warm, spicy, and sweet experience that is perfect for colder weather and evening events, offering high performance at a low price.",
  //   notes: {
  //     top: ["Mandarin", "Grapefruit", "Mint"],
  //     heart: ["Cinnamon", "Clove", "Pepper"],
  //     base: ["Amber", "Leather", "Woody Notes"],
  //   },
  //   notesDescription:
  //     "Opens with a fleeting fresh burst of citrus and mint before quickly transitioning into its warm heart of cinnamon and spicy cloves. The dry down is a blend of creamy amber, sweet leather, and soft woods, giving it a rich and slightly boozy quality.",
  //   bestTime:
  //     "Ideal for fall, winter, and evening wear, particularly for date nights or going out. The sweetness and spice are too heavy for summer days or professional office settings.",
  //   whoShouldWear:
  //     "Perfect for the person who loves spicy, attention-grabbing scents like 1 Million. This is a loud, youthful, and confident fragrance that is meant to be noticed.",
  //   performance:
  //     "Strong performance. Expect 7-9 hours of longevity with solid projection for the first few hours. It's a performer, but not quite the nuclear beast that CDNIM is. 3-4 sprays should suffice.",
  //   reactions:
  //     "It's a crowd-pleaser, particularly among younger audiences. Expect compliments, especially in cooler weather. It's mass-appealing, similar to its inspiration.",
  //   conclusion:
  //     "If you love the Paco Rabanne 1 Million DNA but want a high-performing clone at a rock-bottom price, this is a fantastic option. It captures the spirit and warmth perfectly.",
  // },
};
