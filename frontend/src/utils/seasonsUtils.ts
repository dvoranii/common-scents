import { seasons } from "../data/seasons";
import type { Season } from "../types/fragrance.types";
import type { SeasonSummary } from "../types/summaries.types";

import AutumnBg from "/assets/images/Occasions/Seasons/AutumnBG.webp";
import SummerBg from "/assets/images/Occasions/Seasons/SummerBG.webp";
import SpringBg from "/assets/images/Occasions/Seasons/SpringBG.webp";
import WinterBg from "/assets/images/Occasions/Seasons/WinterBG.webp";

const SEASON_UI_CONFIG = {
  Winter: {
    backgroundColor: "#7BA5C1",
    backgroundImage: WinterBg,
    mobile:
      "The coldest season, bringing snow, shorter days, and cozy indoor activities with rich, warm fragrances perfect for intimate settings.",
    desktop:
      "A season of crisp, cold air and cozy warmth indoors. Winter fragrances often feature rich, enveloping notes of amber, vanilla, and spices like cinnamon and clove, mixed with the fresh chill of pine, cedar, or mint. These scents evoke imagery of crackling fireplaces, wool blankets, and the clean, silent beauty of snowfall—perfect for creating intimate, comforting atmospheres during the year's shortest days.",
  },
  Spring: {
    backgroundColor: "#3e742e",
    backgroundImage: SpringBg,
    mobile:
      "A season of renewal with blooming flowers, warmer temperatures, and delicate, optimistic fragrances that capture nature's awakening.",
    desktop:
      "The season of rebirth and renewal, where nature awakens in a symphony of color and fragrance. Spring scents are characterized by delicate, optimistic notes—dewy greens, tender blossoms like lily of the valley and peony, and soft fruits such as pear and raspberry. These fragrances evoke the feeling of morning dew on fresh grass, the first warm breeze carrying flower pollen, and the gentle optimism of longer, brighter days returning after winter's slumber.",
  },
  Summer: {
    backgroundColor: "#c45a0e",
    backgroundImage: SummerBg,
    mobile:
      "The hottest season with long sunny days, perfect for fresh, light fragrances with citrus and aquatic notes that capture summer energy.",
    desktop:
      "A season of vibrant energy, long sun-drenched days, and carefree evenings. Summer fragrances burst with freshness and lightness—citrus notes like bergamot and lemon, aquatic accords reminiscent of ocean spray, and airy florals such as jasmine and gardenia. These scents capture the essence of salty sea breezes, tropical fruits, sun-warmed skin, and blooming gardens, perfect for creating an uplifting, energetic presence during the year's most social season.",
  },
  Autumn: {
    backgroundColor: "#5c2d0c",
    backgroundImage: AutumnBg,
    mobile:
      "A season of transition with cooler temperatures, changing leaves, and earthy, spicy fragrances that capture the essence of harvest time.",
    desktop:
      "The season of transformation, where warm days give way to cool evenings and landscapes blaze with color. Autumn fragrances capture this transition with earthy, spicy, and woody accords—think vetiver, patchouli, and oakmoss blended with apple, pumpkin, and nutmeg. These scents mirror the crunch of fallen leaves, the smoky aroma of bonfires, and the comforting sweetness of harvest bounty, creating sophisticated, nostalgic olfactory experiences.",
  },
};

export const getSeasonSummaries = (): SeasonSummary[] => {
  const displayOrder = ["Winter", "Autumn", "Summer", "Spring"];

  return displayOrder
    .map((seasonName) => {
      const season = seasons.find((s) => s.name === seasonName);
      const config =
        SEASON_UI_CONFIG[seasonName as keyof typeof SEASON_UI_CONFIG];

      if (!season || !config) return null;

      return {
        ...season,
        backgroundColor: config.backgroundColor,
        backgroundImage: config.backgroundImage,
        desktopDescription: config.desktop,
        mobileDescription: config.mobile,
      };
    })
    .filter((s): s is SeasonSummary => s !== null);
};

export const getAllSeasons = (): Season[] => {
  return seasons;
};

export const getSeasonBySlug = (slug: string): Season | undefined => {
  return seasons.find((season) => season.slug === slug);
};

export const getFragranceSeasons = (seasonNames?: string[]): Season[] => {
  if (!seasonNames || seasonNames.length === 0) return [];

  return seasonNames
    .map((name) => seasons.find((season) => season.name === name))
    .filter((season): season is Season => season !== undefined);
};
