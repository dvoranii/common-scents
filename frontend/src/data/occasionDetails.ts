// src/data/occasionDetails.ts

import type { OccasionDetail } from "../types/data.types";

import OpenOfficeImg from "../assets/Occasions/Details/open-office.avif";
import ClientMeetingImg from "../assets/Occasions/Details/client-meeting.png";
import VideoCallImg from "../assets/Occasions/Details/video-call.png";
import WFHImg from "../assets/Occasions/Details/wfh.png";
import WeekendComfortImg from "../assets/Occasions/Details/weekend-comfort.png";
import CasualOutingImg from "../assets/Occasions/Details/casual-outing.png";
import NightClubImg from "../assets/Occasions/Details/nightclub.png";
import HousePartyImg from "../assets/Occasions/Details/house-party.png";
import LateNightBarImg from "../assets/Occasions/Details/late-night-bar.png";
import BlackTieImg from "../assets/Occasions/Details/black-tie.png";
import WeddingGuestImg from "../assets/Occasions/Details/wedding-guest.png";
import BusinessDinnerImg from "../assets/Occasions/Details/business-dinner.png";
import GymSessionImg from "../assets/Occasions/Details/gym-session.png";
import OutdoorSportsImg from "../assets/Occasions/Details/outdoor-sports.png";
import PostWorkoutImg from "../assets/Occasions/Details/post-workout.png";
import DateNightImg from "../assets/Occasions/Details/date-night.png";
import DinnerDateImg from "../assets/Occasions/Details/dinner-date.png";
import OutdoorWalkImg from "../assets/Occasions/Details/outdoor-walk.png";
import BeachDayImg from "../assets/Occasions/Details/beach-day.png";
import SummerPartyImg from "../assets/Occasions/Details/summer-party.png";
import VacationImg from "../assets/Occasions/Details/vacation.png";
import WinterNightImg from "../assets/Occasions/Details/winter-night.png";
import HolidayGatheringImg from "../assets/Occasions/Details/holiday-gathering.png";
import CozyIndoorsImg from "../assets/Occasions/Details/cozy-indoors.png";

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
        image: DateNightImg,
      },
      {
        title: "Dinner Date",
        description:
          "Smooth and seductive scents that complement an intimate setting.",
        image: DinnerDateImg,
      },
      {
        title: "Outdoor Walk",
        description:
          "Fresh and inviting, leaving a pleasant trail without being heavy.",
        image: OutdoorWalkImg,
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
        image: WFHImg,
      },
      {
        title: "Casual Outings",
        description:
          "Universally appealing fragrances for shopping, brunch, or errands.",
        image: CasualOutingImg,
      },
      {
        title: "Weekend Comfort",
        description:
          "Relaxed, easy-going scents for low-key weekend activities.",
        image: WeekendComfortImg,
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
        image: NightClubImg,
      },
      {
        title: "House Party",
        description:
          "Bold scents that make an impression in close social settings.",
        image: HousePartyImg,
      },
      {
        title: "Late Night Bar",
        description:
          "Seductive, mysterious fragrances for intimate nighttime venues.",
        image: LateNightBarImg,
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
        image: BlackTieImg,
      },
      {
        title: "Wedding Guest",
        description:
          "Memorable yet appropriate fragrances that photograph well.",
        image: WeddingGuestImg,
      },
      {
        title: "Business Dinner",
        description:
          "Sophisticated scents that command respect in professional settings.",
        image: BusinessDinnerImg,
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
        image: OpenOfficeImg,
      },
      {
        title: "Client Meetings",
        description: "Polished, professional scents that inspire confidence.",
        image: ClientMeetingImg,
      },
      {
        title: "Video Calls",
        description: "Subtle scents for your own comfort during remote work.",
        image: VideoCallImg,
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
        image: GymSessionImg,
      },
      {
        title: "Outdoor Sports",
        description: "Energizing fragrances for hiking, biking, or running.",
        image: OutdoorSportsImg,
      },
      {
        title: "Post-Workout",
        description: "Clean, refreshing scents to apply after showering.",
        image: PostWorkoutImg,
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
        image: BeachDayImg,
      },
      {
        title: "Summer Party",
        description: "Vibrant, tropical fragrances for outdoor gatherings.",
        image: SummerPartyImg,
      },
      {
        title: "Vacation Mode",
        description:
          "Carefree, easy-wearing scents for traveling and relaxation.",
        image: VacationImg,
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
        image: WinterNightImg,
      },
      {
        title: "Holiday Gatherings",
        description: "Warm, inviting scents perfect for festive occasions.",
        image: HolidayGatheringImg,
      },
      {
        title: "Cozy Indoors",
        description:
          "Comforting fragrances for staying warm during cold months.",
        image: CozyIndoorsImg,
      },
    ],
  },
};
