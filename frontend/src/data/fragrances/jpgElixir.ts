import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import JPGElixirBottle from "../../assets/FragranceReviews/FragranceBottles/JPG-Elixir.png";
import JPGElixirThumbnail from "../../assets/FragranceThumbnails/JPG-Elixir.png";
import JPGLogo from "../../assets/FragranceReviews/FragranceLogos/JPG_Logo.png";

import QuentinBischImg from "../../assets/FragranceReviews/Perfumers/Quentin-Bisch.webp";

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
  season: ["Fall", "Winter"],
  occasion: ["Date Night", "Night Out", "Cold Weather"],
  category: ["Oriental", "Gourmande", "Fougère"],
  categorySlugs: ["oriental", "gourmande", "fougere"],
  thumbnailImage: JPGElixirThumbnail,
  heroImage: JPGElixirBottle,
  fragranticaUrl:
    "https://www.fragrantica.com/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html",
  youtubeUrl: "",
  longevity: 8.5,
  projection: 8,
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

  //   reviewContent: {
  //     overview:
  //       "The most overhated Creed fragrance. Viking Cologne gets a bad rap in the fragrance community, but it's actually a solid fresh scent. Is it worth $325? That's debatable. But is it bad? Absolutely not. The fragrance snobs will tell you it's garbage, but they're wrong.",
  //     notes: {
  //       top: ["Lemon", "Mint", "Pink Pepper"],
  //       heart: ["Lavender", "Geranium"],
  //       base: ["Sandalwood", "Vetiver", "Patchouli"],
  //     },
  //     notesDescription:
  //       "Opens with a bright citrus and mint combination that's refreshing without being sharp or synthetic. The lavender in the heart adds sophistication and depth, while the woody base of sandalwood and vetiver keeps it grounded and masculine. It's fresh without being boring.",
  //     bestTime:
  //       "Perfect for spring and summer, especially in office or casual settings. Light enough for hot weather, sophisticated enough for professional environments. This is what you wear when you want to smell clean and expensive without trying too hard.",
  //     whoShouldWear:
  //       "Anyone who wants a clean, sophisticated fresh scent without being generic. If you're tired of Sauvage clones but still want something fresh and versatile, this is worth trying. Pairs well with crisp button-downs and summer suits.",
  //     performance:
  //       "Decent for a cologne concentration. 5-6 hours with moderate projection. Not a beast mode performer, but that's intentional - it's meant to be refined and close-to-skin. You'll need to reapply after lunch if you want it lasting all day.",
  //     reactions:
  //       "Less polarizing than Viking EDP. People appreciate the freshness without it being overwhelming. Not a compliment getter, but a solid everyday scent that won't offend anyone. Your coworkers will think you smell clean.",
  //     conclusion:
  //       "Overpriced? Yes. Bad? No. There are better value options (looking at you, Prada L'Homme), but if you love Creed and want something fresh for summer, this is solid. Just don't blind buy at full retail - get a decant first.",
  //   },
};
