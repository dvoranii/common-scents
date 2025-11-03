import DailyDriver from "../assets/Occasions/daily-driver.webp";
import DateNight from "../assets/Occasions/date-night.avif";
import Formal from "../assets/Occasions/formal-2.jpg";
import Office from "../assets/Occasions/office-3.jpg";
import NightOut from "../assets/Occasions/clubbing.jpg";
import Active from "../assets/Occasions/gym-1.jpg";
import ColdWeather from "../assets/Occasions/cold-weather-1.jpg";
import Summer from "../assets/Occasions/summer-vibe-1.jpg";
import type { Occasion } from "../types/fragrance.types";

export const occasions: Occasion[] = [
  {
    title: "Daily Driver",
    slug: "daily-driver",
    image: DailyDriver,
    description: "Easy, versatile scents for any day.",
  },
  {
    title: "Date Night",
    slug: "date-night",
    image: DateNight,
    description: "Romantic, seductive, unforgettable.",
  },
  {
    title: "Night Out",
    slug: "night-out",
    image: NightOut,
    description: "Bold scents that own the room.",
  },
  {
    title: "Formal",
    slug: "formal",
    image: Formal,
    description: "Refined elegance for special events.",
  },
  {
    title: "Office",
    slug: "office",
    image: Office,
    description: "Clean, professional, and subtle.",
  },
  {
    title: "Active / Gym",
    slug: "active-gym",
    image: Active,
    description: "Fresh energy for on-the-move days.",
  },
  {
    title: "Summer Vibes",
    slug: "summer-vibes",
    image: Summer,
    description: "Bright, breezy, and sun-soaked.",
  },
  {
    title: "Cold Weather",
    slug: "cold-weather",
    image: ColdWeather,
    description: "Warm, cozy, and full-bodied.",
  },
];
