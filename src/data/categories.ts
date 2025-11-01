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
    color: "linear-gradient(to bottom, #e8f5e8, #e8f5c8)",
    iconColor: "#388e3c",
    slug: "fresh-citrus",
  },
  {
    name: "Woody",
    icon: Trees,
    color: "linear-gradient(to bottom, #f5e6d3, #d4b5a0)",
    iconColor: "#5d4037",
    slug: "woody",
  },
  {
    name: "Floral",
    icon: Flower,
    color: "linear-gradient(to bottom, #fce4ec, #f8d7da)",
    iconColor: "#c2185b",
    slug: "floral",
  },
  {
    name: "Spicy",
    icon: Flame,
    color: "linear-gradient(to bottom, #fff3e0, #ffeaa7)",
    iconColor: "#d35400",
    slug: "spicy",
  },
  {
    name: "Fougère",
    icon: Mountain,
    color: "linear-gradient(to bottom, #e0f2f1, #a8e6cf)",
    iconColor: "#00796b",
    slug: "fougere",
  },
  {
    name: "Gourmande",
    icon: Coffee,
    color: "linear-gradient(to bottom, #fff8e1, #fdcb6e)",
    iconColor: "#795548",
    slug: "gourmande",
  },
  {
    name: "Oriental",
    icon: Sparkles,
    color: "linear-gradient(to bottom, #f3e5f5, #fab1a0)",
    iconColor: "#8e44ad",
    slug: "oriental",
  },
  {
    name: "Chypre",
    icon: Gem,
    color: "linear-gradient(to bottom, #e3f2fd, #74b9ff)",
    iconColor: "#00579c",
    slug: "chypre",
  },
  {
    name: "Niche Picks",
    icon: Star,
    color: "linear-gradient(to bottom, #fffde7, #e8d5c4)",
    iconColor: "#f39c12",
    slug: "niche",
  },
];
