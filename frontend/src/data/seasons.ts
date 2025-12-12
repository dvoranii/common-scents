import WinterBg from "/assets/images/Occasions/Seasons/winter-lake.jpg";
import SpringBg from "/assets/images/Occasions/Seasons/spring.webp";
import SummerBg from "/assets/images/Occasions/Seasons/big-beach.jpg";
import AutumnBg from "/assets/images/Occasions/Seasons/autumn.webp";
import type { Season } from "../types/fragrance.types";

export const seasons: Season[] = [
  {
    name: "Winter",
    slug: "winter",
    image: WinterBg,
    thumbnail: WinterBg,
    description: "Warm, cozy scents for cold days.",
  },
  {
    name: "Spring",
    slug: "spring",
    image: SpringBg,
    thumbnail: SpringBg,
    description: "Fresh, floral fragrances for renewal.",
  },
  {
    name: "Summer",
    slug: "summer",
    image: SummerBg,
    thumbnail: SummerBg,
    description: "Light, refreshing scents for hot weather.",
  },
  {
    name: "Autumn",
    slug: "autumn",
    image: AutumnBg,
    thumbnail: AutumnBg,
    description: "Warm, spicy notes for crisp air.",
  },
];
