import type { Accords } from "../types/fragrance.types";

export const accordPresets: Record<string, Omit<Accords, "width">> = {
  vanilla: {
    name: "Vanilla",
    background: "#FFFEC0",
    color: "black",
  },
  amber: {
    name: "Amber",
    background: "#D1855C",
    color: "white",
  },
  warmSpicy: {
    name: "Warm Spicy",
    background: "#CC3300",
    color: "white",
  },
  metallic: { name: "Metallic", background: "#b0c4de", color: "#000000" },
  whiteFloral: {
    name: "White Floral",
    background: "#f5f5f5",
    color: "#333333",
  },
  animalic: { name: "Animalic", background: "#8b4513", color: "#ffffff" },
  fruity: {
    name: "Fruity",
    background: "rgb(255, 204, 0)",
    color: "rgb(38, 50, 70)",
  },
  cinnamon: {
    name: "Cinnamon",
    background: "#E3A374",
    color: "white",
  },
  sweet: {
    name: "Sweet",
    background: "#F1565A",
    color: "white",
  },
  lavender: {
    name: "Lavender",
    background: "#F0E1F3",
    color: "rgb(38, 50, 70)",
  },
  aromatic: {
    name: "Aromatic",
    background: "#37A089",
    color: "rgb(38, 50, 70)",
  },
  fresh: {
    name: "Fresh",
    background: "#C5F0F5",
    color: "rgb(38, 50, 70)",
  },
  powdery: {
    name: "Powdery",
    background: "rgb(255, 229, 204)",
    color: "rgb(38, 50, 70)",
  },
  citrus: {
    name: "Citrus",
    background: "rgb(255, 255, 0)",
    color: "rgb(38, 50, 70)",
  },
  freshSpicy: {
    name: "Fresh Spicy",
    background: "#96D149",
    color: "rgb(38, 50, 70)",
  },
  woody: {
    name: "Woody",
    background: "rgb(139, 90, 43)",
    color: "white",
  },
  leather: {
    name: "Leather",
    background: "rgb(139, 69, 19)",
    color: "white",
  },
  herbal: {
    name: "Herbal",
    background: "#ABCBB6",
    color: "black",
  },
  softSpicy: {
    name: "Soft Spicy",
    background: "#EFB39F",
    color: "black",
  },
  earthy: {
    name: "Earthy",
    background: "#A6A097;",
    color: "white",
  },
  honey: {
    name: "Honey",
    background: "#FBBF46;",
    color: "black",
  },
  tobacco: {
    name: "Tobacco",
    background: "#D0B183;",
    color: "white",
  },
  green: {
    name: "Green",
    background: "#79BF81;",
    color: "white",
  },
};

export const createAccord = (
  presetKey: keyof typeof accordPresets,
  width: string
): Accords => ({
  ...accordPresets[presetKey],
  width,
});
