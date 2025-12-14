import DailyDriver from "/assets/images/Occasions/daily-driver.webp";
import DateNightThumbnail from "/assets/images/Occasions/date-night.avif";
import DateNightVideo from "/assets/images/Occasions/Details/Candles-Flickering.mp4";

import DateNight from "/assets/images/Occasions/date-night.jpg";

import Formal from "/assets/images/Occasions/formal-4.jpeg";
import FormalThumbnail from "/assets/images/Occasions/formal-2.jpg";
import FormalVideo from "/assets/images/Occasions/Details/suit-video.mp4";

import Office from "/assets/images/Occasions/office-3.jpg";

import NightOut from "/assets/images/Occasions/clubbing.png";
import ActiveThumbnail from "/assets/images/Occasions/gym-1.jpg";
import Active from "/assets/images/Occasions/gym-5.jpg";
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
    video: DateNightVideo,
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
    video: FormalVideo,
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
];
