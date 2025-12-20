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
    name: "Fresh & Citrus",
    icon: Leaf,
    color: "linear-gradient(to bottom, #e8f5e8, #e8f5c8)",
    iconBg: "#388e3c",
    iconColor: "#ffffff",
    slug: "fresh-citrus",
    description:
      "Crisp, bright scents inspired by nature's freshest citrus fruits and green notes.",
  },
  {
    name: "Woody",
    icon: Trees,
    color: "linear-gradient(to bottom, #f5e6d3, #d4b5a0)",
    iconBg: "#5d4037",
    iconColor: "#ffffff",
    slug: "woody",
    description:
      "Earthy, warm aromas evoking forests, timber, and aromatic woods.",
  },
  {
    name: "Floral",
    icon: Flower,
    color: "linear-gradient(to bottom, #fce4ec, #f8d7da)",
    iconBg: "#c2185b",
    iconColor: "#ffffff",
    slug: "floral",
    description:
      "Soft, romantic scents dominated by flowers and fresh blossoms.",
  },
  {
    name: "Spicy",
    icon: Flame,
    color: "linear-gradient(to bottom, #fff3e0, #ffeaa7)",
    iconBg: "#d35400",
    iconColor: "#ffffff",
    slug: "spicy",
    description:
      "Warm and exotic notes with hints of pepper, clove, and aromatic spices.",
  },
  {
    name: "Fougère",
    icon: Mountain,
    color: "linear-gradient(to bottom, #e0f2f1, #a8e6cf)",
    iconBg: "#00796b",
    iconColor: "#ffffff",
    slug: "fougere",
    description:
      "Classic masculine scents combining lavender, oakmoss, and herbal notes.",
  },
  {
    name: "Gourmande",
    icon: Coffee,
    color: "linear-gradient(to bottom, #fff8e1, #fdcb6e)",
    iconBg: "#795548",
    iconColor: "#ffffff",
    slug: "gourmande",
    description:
      "Sweet, dessert-inspired fragrances with vanilla, chocolate, and caramel tones.",
  },
  {
    name: "Oriental",
    icon: Sparkles,
    color: "linear-gradient(to bottom, #f3e5f5, #fab1a0)",
    iconBg: "#8e44ad",
    iconColor: "#ffffff",
    slug: "oriental",
    description:
      "Rich, sensual scents blending exotic resins, spices, and amber.",
  },
  {
    name: "Chypre",
    icon: Gem,
    color: "linear-gradient(to bottom, #e3f2fd, #74b9ff)",
    iconBg: "#00579c",
    iconColor: "#ffffff",
    slug: "chypre",
    description:
      "Sophisticated compositions combining citrus top notes with mossy and woody bases.",
  },
  {
    name: "Niche Picks",
    icon: Star,
    color: "linear-gradient(to bottom, #fffde7, #e8d5c4)",
    iconBg: "#f39c12",
    iconColor: "#ffffff",
    slug: "niche",
    description:
      "Unique and unconventional fragrances for adventurous scent lovers.",
  },
];
