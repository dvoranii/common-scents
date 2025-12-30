import DailyDriver from "/assets/images/Occasions/daily-driver.webp";
import DailyDriverVid from "/assets/videos/daily-driver-vid.mp4";

import DateNightThumbnail from "/assets/images/Occasions/date-night-home.webp";
import DateNightVideo from "/assets/videos/Candles-Flickering.mp4";

import DateNight from "/assets/images/Occasions/date-night-detail.webp";

import Formal from "/assets/images/Occasions/formal-4.webp";
import FormalThumbnail from "/assets/images/Occasions/formal-2.webp";
import FormalVideo from "/assets/videos/suit-video.mp4";

import Office from "/assets/images/Occasions/office-3.webp";
import OfficeVid from "/assets/videos/typing-video.mp4";

import NightOut from "/assets/images/Occasions/clubbing.webp";
import NightOutVideo from "/assets/videos/nightclub-live-video.mp4";

import ActiveThumbnail from "/assets/images/Occasions/gym-1.webp";
import Active from "/assets/images/Occasions/gym-5.webp";
import ActiveVid from "/assets/videos/gym-video.mp4";
import type { Occasion } from "../types/fragrance.types";

export const occasions: Occasion[] = [
  {
    name: "Daily Driver",
    slug: "daily-driver",
    image: DailyDriver,
    video: DailyDriverVid,
    thumbnail: DailyDriver,
    description: "Easy, versatile scents for any day.",
  },
  {
    name: "Date Night",
    slug: "date-night",
    image: DateNight,
    thumbnail: DateNightThumbnail,
    video: DateNightVideo,
    description: "Romantic, seductive, unforgettable.",
  },
  {
    name: "Night Out",
    slug: "night-out",
    image: NightOut,
    video: NightOutVideo,
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
    video: OfficeVid,
    thumbnail: Office,
    description: "Clean, professional, and subtle.",
  },
  {
    name: "Active / Gym",
    slug: "active-gym",
    image: Active,
    video: ActiveVid,
    thumbnail: ActiveThumbnail,
    description: "Fresh energy for on-the-move days.",
  },
];
