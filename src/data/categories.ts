import {
  Leaf,
  Trees,
  Flower,
  Flame,
  Star,
  Sparkles,
  Coffee,
  Mountain,
  Gem,
} from "lucide-react";
import type { Category } from "../types/fragrance.types";

export const categories: Category[] = [
  {
    name: "Fresh & Citrus",
    icon: Leaf,
    color: "#e8f5e8",
    iconColor: "#388e3c", // Forest Green
    slug: "fresh-citrus",
  },
  {
    name: "Woody",
    icon: Trees,
    color: "#d4b5a0",
    iconColor: "#5d4037", // Dark Coffee Brown
    slug: "woody",
  },
  {
    name: "Floral",
    icon: Flower,
    color: "#f8d7da",
    iconColor: "#c2185b", // Deep Raspberry Pink
    slug: "floral",
  },
  {
    name: "Spicy",
    icon: Flame,
    color: "#ffeaa7",
    iconColor: "#d35400", // Burnt Orange
    slug: "spicy",
  },
  {
    name: "Fougère",
    icon: Mountain,
    color: "#a8e6cf",
    iconColor: "#00796b", // Dark Teal
    slug: "fougere",
  },
  {
    name: "Gourmande",
    icon: Coffee,
    color: "#fdcb6e",
    iconColor: "#795548", // Dark Chocolate Brown
    slug: "gourmande",
  },
  {
    name: "Oriental",
    icon: Sparkles,
    color: "#fab1a0",
    iconColor: "#8e44ad", // Deep Purple
    slug: "oriental",
  },
  {
    name: "Chypre",
    icon: Gem,
    color: "#74b9ff",
    iconColor: "#00579c", // Deep Sapphire Blue
    slug: "chypre",
  },
  {
    name: "Niche Picks",
    icon: Star,
    color: "#e8d5c4",
    iconColor: "#f39c12", // Deep Gold
    slug: "niche",
  },
];
