// src/data/fragrances/afnan9pm.ts
import { getNote } from "../noteImages";
import { createAccord } from "../accordPresets";
import type { Fragrance } from "../../types/fragrance.types";

import Afnan9pmThumbnail from "../../assets/FragranceThumbnails/Afnan-9pm.webp";
import Afnan9pmBottle from "../../assets/FragranceReviews/FragranceBottles/9PM.png";
import AfnanLogo from "../../assets/FragranceReviews/FragranceLogos/Afnan_Logo.webp";
import GaelMonteroImg from "../../assets/FragranceReviews/Perfumers/Gael-Montero.png";

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
  season: ["Fall", "Winter"],
  occasion: ["Date Night", "Night Out"],
  category: ["Oriental", "Gourmande"],
  categorySlugs: ["oriental", "gourmande"],
  thumbnailImage: Afnan9pmThumbnail,
  heroImage: Afnan9pmBottle,
  fragranticaUrl: "https://www.fragrantica.com/perfume/Afnan/9pm-65414.html",
  youtubeUrl: "",
  longevity: 8,
  projection: 7,
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

  // reviewContent: {
  //   overview:
  //     "A sophisticated evening scent that punches above its price point. Afnan 9PM is often called the best Ultramale clone, and for good reason. This fragrance delivers incredible performance and a crowd-pleasing scent profile at a fraction of the cost of its inspiration.",
  //   notes: {
  //     top: ["Apple", "Cinnamon"],
  //     heart: ["Orange Blossom", "Lavender"],
  //     base: ["Vanilla", "Tonka Bean", "Patchouli"],
  //   },
  //   notesDescription:
  //     "Opens with a crisp apple and warm cinnamon that immediately grabs attention. The heart brings in floral sophistication with orange blossom and lavender, while the base settles into a warm, sweet blend of vanilla and tonka bean with a touch of earthy patchouli.",
  //   bestTime:
  //     "Perfect for fall/winter date nights or evening events. The sweetness and warmth make it ideal for cooler weather when you want to make an impression. Don't wear this to the office unless you want everyone asking what you're wearing.",
  //   whoShouldWear:
  //     "Best worn with a dark jacket, boots, and quiet confidence. This isn't a gym scent - save it for when you're trying to turn heads. If you're the type who wears leather jackets and knows how to dress, this is your scent.",
  //   performance:
  //     "Longevity is impressive for the price point - easily 8+ hours on skin, even longer on clothes. Projection is strong for the first 2-3 hours, then settles into a pleasant skin scent. Keep a travel decant for touch-ups if you're going to be out all night.",
  //   reactions:
  //     "My girlfriend loves this one. Gets compliments every time I wear it. The sweet, spicy profile is crowd-pleasing without being generic. Just don't overspray - 3-4 sprays is plenty.",
  //   conclusion:
  //     "At $35, this is an absolute steal. If you like sweet, spicy fragrances and don't want to drop $150+ on Ultramale, this is a no-brainer. Yes, it's synthetic. Yes, it's a clone. But it smells good and performs well. That's what matters.",
  // },
};
