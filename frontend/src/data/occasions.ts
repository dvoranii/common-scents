import DailyDriver from "../assets/Occasions/daily-driver.webp";
import DateNightThumbnail from "../assets/Occasions/date-night.avif";
import DateNight from "../assets/Occasions/date-night.jpg";
import Formal from "../assets/Occasions/formal-4.jpeg";
import FormalThumbnail from "../assets/Occasions/formal-2.jpg";

import Office from "../assets/Occasions/office-3.jpg";

import NightOut from "../assets/Occasions/clubbing.png";
import ActiveThumbnail from "../assets/Occasions/gym-1.jpg";
import Active from "../assets/Occasions/gym-5.jpg";
import ColdWeather from "../assets/Occasions/cold-weather-1.jpg";
import SummerThumbnail from "../assets/Occasions/summer-vibe-1.jpg";
import Summer from "../assets/Occasions/summer-vibe-hero.jpg";
import type { Occasion } from "../types/fragrance.types";

export const occasions: Occasion[] = [
  {
    name: "Daily Driver",
    slug: "daily-driver",
    image: DailyDriver,
    thumbnail: DailyDriver,
    description: "Easy, versatile scents for any day.",
  },
  {
    name: "Date Night",
    slug: "date-night",
    image: DateNight,
    thumbnail: DateNightThumbnail,
    description: "Romantic, seductive, unforgettable.",
  },
  {
    name: "Night Out",
    slug: "night-out",
    image: NightOut,
    thumbnail: NightOut,
    description: "Bold scents that own the room.",
  },
  {
    name: "Formal",
    slug: "formal",
    image: Formal,
    thumbnail: FormalThumbnail,
    description: "Refined elegance for special events.",
  },
  {
    name: "Office",
    slug: "office",
    image: Office,
    thumbnail: Office,
    description: "Clean, professional, and subtle.",
  },
  {
    name: "Active / Gym",
    slug: "active-gym",
    image: Active,
    thumbnail: ActiveThumbnail,
    description: "Fresh energy for on-the-move days.",
  },
  {
    name: "Summer Vibes",
    slug: "summer-vibes",
    image: Summer,
    thumbnail: SummerThumbnail,
    description: "Bright, breezy, and sun-soaked.",
  },
  {
    name: "Cold Weather",
    slug: "cold-weather",
    image: ColdWeather,
    thumbnail: ColdWeather,
    description: "Warm, cozy, and full-bodied.",
  },
];
