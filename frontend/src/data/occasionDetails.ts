// src/data/occasionDetails.ts

import type { OccasionDetail } from "../types/data.types";

import OpenOffice1 from "/assets/images/Occasions/Details/office-1.webp";
import OpenOffice2 from "/assets/images/Occasions/Details/office-2.webp";
import OpenOffice3 from "/assets/images/Occasions/Details/office-3.webp";

import ClientMeeting1 from "/assets/images/Occasions/Details/client-meeting.webp";
import ClientMeeting2 from "/assets/images/Occasions/Details/client-meeting-2.webp";
import ClientMeeting3 from "/assets/images/Occasions/Details/client-meeting-3.webp";

import VideoCall1 from "/assets/images/Occasions/Details/video-call.webp";
import VideoCall2 from "/assets/images/Occasions/Details/video-call-2.webp";
import VideoCall3 from "/assets/images/Occasions/Details/video-call-3.webp";

import WFH1 from "/assets/images/Occasions/Details/wfh.webp";
import WFH2 from "/assets/images/Occasions/Details/wfh-2.webp";
import WFH3 from "/assets/images/Occasions/Details/wfh-3.webp";

import WeekendComfort1 from "/assets/images/Occasions/Details/weekend-comfort.webp";
import WeekendComfort2 from "/assets/images/Occasions/Details/weekend-comfort-2.webp";
import WeekendComfort3 from "/assets/images/Occasions/Details/weekend-comfort-3.webp";

import CasualOuting1 from "/assets/images/Occasions/Details/casual-outing.webp";
import CasualOuting2 from "/assets/images/Occasions/Details/casual-outing-2.webp";
import CasualOuting3 from "/assets/images/Occasions/Details/casual-outing-3.webp";

import NightClub1 from "/assets/images/Occasions/Details/nightclub.webp";
import NightClub2 from "/assets/images/Occasions/Details/nightclub-2.webp";
import NightClub3 from "/assets/images/Occasions/Details/nightclub-3.webp";

import HouseParty1 from "/assets/images/Occasions/Details/house-party.webp";
import HouseParty2 from "/assets/images/Occasions/Details/house-party-2.webp";
import HouseParty3 from "/assets/images/Occasions/Details/house-party-3.webp";

import LateNightBar1 from "/assets/images/Occasions/Details/late-night-bar.webp";
import LateNightBar2 from "/assets/images/Occasions/Details/late-night-bar-2.webp";
import LateNightBar3 from "/assets/images/Occasions/Details/late-night-bar-3.webp";

import BlackTie1 from "/assets/images/Occasions/Details/black-tie.webp";
import BlackTie2 from "/assets/images/Occasions/Details/black-tie-2.webp";
import BlackTie3 from "/assets/images/Occasions/Details/black-tie-3.webp";

import WeddingGuest1 from "/assets/images/Occasions/Details/wedding-guest.webp";
import WeddingGuest2 from "/assets/images/Occasions/Details/wedding-guest-2.webp";
import WeddingGuest3 from "/assets/images/Occasions/Details/wedding-guest-3.webp";

import BusinessDinner1 from "/assets/images/Occasions/Details/business-dinner.webp";
import BusinessDinner2 from "/assets/images/Occasions/Details/business-dinner-2.webp";
import BusinessDinner3 from "/assets/images/Occasions/Details/business-dinner-3.webp";

import GymSession1 from "/assets/images/Occasions/Details/gym-session.webp";
import GymSession2 from "/assets/images/Occasions/Details/gym-session-2.webp";
import GymSession3 from "/assets/images/Occasions/Details/gym-session-3.webp";

import OutdoorSports1 from "/assets/images/Occasions/Details/outdoor-sports.webp";
import OutdoorSports2 from "/assets/images/Occasions/Details/outdoor-sports-2.webp";
import OutdoorSports3 from "/assets/images/Occasions/Details/outdoor-sports-3.webp";

import PostWorkout1 from "/assets/images/Occasions/Details/post-workout.webp";
import PostWorkout2 from "/assets/images/Occasions/Details/post-workout-2.webp";
import PostWorkout3 from "/assets/images/Occasions/Details/post-workout-3.webp";

import DateNight1 from "/assets/images/Occasions/Details/date-night.webp";
import DateNight2 from "/assets/images/Occasions/Details/date-night-2.webp";
import DateNight3 from "/assets/images/Occasions/Details/date-night-3.webp";

import DinnerDate1 from "/assets/images/Occasions/Details/dinner-date.webp";
import DinnerDate2 from "/assets/images/Occasions/Details/dinner-date-2.webp";
import DinnerDate3 from "/assets/images/Occasions/Details/dinner-date-3.webp";

import OutdoorWalk1 from "/assets/images/Occasions/Details/outdoor-walk.webp";
import OutdoorWalk2 from "/assets/images/Occasions/Details/outdoor-walk-2.webp";
import OutdoorWalk3 from "/assets/images/Occasions/Details/outdoor-walk-3.webp";

import BeachDayImg from "/assets/images/Occasions/Details/beach-day.webp";
import SummerPartyImg from "/assets/images/Occasions/Details/summer-party.webp";
import VacationImg from "/assets/images/Occasions/Details/vacation.webp";
import WinterNightImg from "/assets/images/Occasions/Details/winter-night.webp";
import HolidayGatheringImg from "/assets/images/Occasions/Details/holiday-gathering.webp";
import CozyIndoorsImg from "/assets/images/Occasions/Details/cozy-indoors.webp";

export const occasionDetails: Record<string, OccasionDetail> = {
  "date-night": {
    subtitle: "FRAGRANCES THAT SET THE MOOD.",
    fullDescription:
      "Date Night fragrances are designed to captivate — warm, sweet, and magnetic scents that leave a lasting impression. These are scents that invite closeness, spark attraction, and project confidence without overwhelming your partner. Think seductive vanilla, smooth tonka bean, or spicy cardamom — notes that create an aura of intrigue.",
    settings: [
      {
        title: "Casual Bar",
        description:
          "Playful and energetic — perfect for first dates or casual meetups.",
        images: [DateNight1, DateNight2, DateNight3],
      },
      {
        title: "Dinner Date",
        description:
          "Smooth and seductive scents that complement an intimate setting.",
        images: [DinnerDate1, DinnerDate2, DinnerDate3],
      },
      {
        title: "Outdoor Walk",
        description:
          "Fresh and inviting, leaving a pleasant trail without being heavy.",
        images: [OutdoorWalk1, OutdoorWalk2, OutdoorWalk3],
      },
    ],
  },
  "daily-driver": {
    subtitle: "YOUR EVERYDAY SIGNATURE.",
    fullDescription:
      "Daily Driver fragrances are the workhorses of your collection — versatile, easy-to-wear scents that work in virtually any situation. These are crowd-pleasers that won't offend in close quarters, yet still make a subtle statement. Perfect for running errands, casual hangouts, or days when you want to smell great without overthinking it.",
    settings: [
      {
        title: "Work From Home",
        description:
          "Light and uplifting scents that boost your mood throughout the day.",
        images: [WFH1, WFH2, WFH3],
      },
      {
        title: "Casual Outings",
        description:
          "Universally appealing fragrances for shopping, brunch, or errands.",
        images: [CasualOuting1, CasualOuting2, CasualOuting3],
      },
      {
        title: "Weekend Comfort",
        description:
          "Relaxed, easy-going scents for low-key weekend activities.",
        images: [WeekendComfort1, WeekendComfort2, WeekendComfort3],
      },
    ],
  },
  "night-out": {
    subtitle: "OWN THE ROOM.",
    fullDescription:
      "Night Out fragrances are bold, attention-grabbing, and unapologetically loud. These are the scents that announce your presence before you enter the room — sweet, spicy, and projection-heavy. Perfect for clubs, parties, and any environment where you want to stand out and be remembered.",
    settings: [
      {
        title: "Nightclub",
        description:
          "Powerful, sweet fragrances that cut through crowds and loud music.",
        images: [NightClub1, NightClub2, NightClub3],
      },
      {
        title: "House Party",
        description:
          "Bold scents that make an impression in close social settings.",
        images: [HouseParty1, HouseParty2, HouseParty3],
      },
      {
        title: "Late Night Bar",
        description:
          "Seductive, mysterious fragrances for intimate nighttime venues.",
        images: [LateNightBar1, LateNightBar2, LateNightBar3],
      },
    ],
  },
  formal: {
    subtitle: "REFINED ELEGANCE.",
    fullDescription:
      "Formal fragrances exude sophistication and refinement — these are the scents you wear when you need to make a polished, professional impression. Think weddings, black-tie events, business dinners, and important meetings. These fragrances are complex, mature, and commanding without being overpowering.",
    settings: [
      {
        title: "Black Tie Events",
        description:
          "Luxurious, complex scents that match the elegance of formal attire.",
        images: [BlackTie1, BlackTie2, BlackTie3],
      },
      {
        title: "Wedding Guest",
        description:
          "Memorable yet appropriate fragrances that photograph well.",
        images: [WeddingGuest1, WeddingGuest2, WeddingGuest3],
      },
      {
        title: "Business Dinner",
        description:
          "Sophisticated scents that command respect in professional settings.",
        images: [BusinessDinner1, BusinessDinner2, BusinessDinner3],
      },
    ],
  },
  office: {
    subtitle: "PROFESSIONAL AND SUBTLE.",
    fullDescription:
      "Office fragrances are the art of restraint — clean, fresh, and professional scents that enhance rather than dominate. These fragrances are designed for close-quarters environments where you want to smell good without overwhelming colleagues. Think crisp citrus, soft woods, and fresh aromatic notes.",
    settings: [
      {
        title: "Open Office",
        description:
          "Light, inoffensive fragrances perfect for shared workspaces.",
        images: [OpenOffice1, OpenOffice2, OpenOffice3],
      },
      {
        title: "Client Meetings",
        description: "Polished, professional scents that inspire confidence.",
        images: [ClientMeeting1, ClientMeeting2, ClientMeeting3],
      },
      {
        title: "Video Calls",
        description: "Subtle scents for your own comfort during remote work.",
        images: [VideoCall1, VideoCall2, VideoCall3],
      },
    ],
  },
  "active-gym": {
    subtitle: "FRESH ENERGY.",
    fullDescription:
      "Active fragrances are built for movement — fresh, clean, and energizing scents that won't clash with sweat or become overwhelming during physical activity. These are light, aquatic, and citrus-forward fragrances that keep you feeling fresh throughout your workout or outdoor adventures.",
    settings: [
      {
        title: "Gym Session",
        description:
          "Ultra-light, fresh scents that won't become cloying when you sweat.",
        images: [GymSession1, GymSession2, GymSession3],
      },
      {
        title: "Outdoor Sports",
        description: "Energizing fragrances for hiking, biking, or running.",
        images: [OutdoorSports1, OutdoorSports2, OutdoorSports3],
      },
      {
        title: "Post-Workout",
        description: "Clean, refreshing scents to apply after showering.",
        images: [PostWorkout1, PostWorkout2, PostWorkout3],
      },
    ],
  },
  "summer-vibes": {
    subtitle: "BRIGHT, BREEZY, SUN-SOAKED.",
    fullDescription:
      "Summer fragrances are all about freshness and vitality — light, citrusy, aquatic scents that evoke beach days, tropical vacations, and sun-drenched afternoons. These fragrances are designed to be refreshing in heat, never heavy or suffocating. Perfect for hot weather and outdoor summer activities.",
    settings: [
      {
        title: "Beach Day",
        description:
          "Aquatic, fresh scents that complement sun and sea breeze.",
        images: [BeachDayImg],
      },
      {
        title: "Summer Party",
        description: "Vibrant, tropical fragrances for outdoor gatherings.",
        images: [SummerPartyImg],
      },
      {
        title: "Vacation Mode",
        description:
          "Carefree, easy-wearing scents for traveling and relaxation.",
        images: [VacationImg],
      },
    ],
  },
  "cold-weather": {
    subtitle: "WARM, COZY, FULL-BODIED.",
    fullDescription:
      "Cold Weather fragrances are the olfactory equivalent of a warm blanket — rich, spicy, and enveloping scents that thrive in cooler temperatures. These are full-bodied fragrances with heavy doses of vanilla, tonka, amber, and warm spices. Perfect for fall and winter when you want maximum projection and longevity.",
    settings: [
      {
        title: "Winter Nights",
        description:
          "Rich, heavy fragrances that project beautifully in cold air.",
        images: [WinterNightImg],
      },
      {
        title: "Holiday Gatherings",
        description: "Warm, inviting scents perfect for festive occasions.",
        images: [HolidayGatheringImg],
      },
      {
        title: "Cozy Indoors",
        description:
          "Comforting fragrances for staying warm during cold months.",
        images: [CozyIndoorsImg],
      },
    ],
  },
};
