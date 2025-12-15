import HarvestSeasonImg from "/assets/images/Occasions/Seasons/harvest-season.webp";
import FallFashionImg from "/assets/images/Occasions/Seasons/fall-fashion.jpg";
import CoolEveningImg from "/assets/images/Occasions/Seasons/cool-evening.jpg";
import BeachDaysImg from "/assets/images/Occasions/Seasons/beach-days.jpg";
import TropicalVacationImg from "/assets/images/Occasions/Seasons/tropical-vacation.png";
import SummerOfficeImg from "/assets/images/Occasions/Seasons/summer-office.png";
import OutdoorActivitiesImg from "/assets/images/Occasions/Seasons/outdoor-activities.png";
import DaytimeEventsImg from "/assets/images/Occasions/Seasons/daytime-events.png";
import FreshStartsImg from "/assets/images/Occasions/Seasons/fresh-starts.jpg";
import HolidayGatheringsImg from "/assets/images/Occasions/Seasons/holiday-gatherings.png";
import CozyEveningImg from "/assets/images/Occasions/Seasons/cozy-evening.png";
import ColdWeatherCommuteImg from "/assets/images/Occasions/Seasons/cold-weather-commute.png";

interface SeasonSetting {
  title: string;
  description: string;
  image: string;
}

interface SeasonDetail {
  subtitle: string;
  fullDescription: string;
  settings: SeasonSetting[];
}

export const seasonDetails: Record<string, SeasonDetail> = {
  winter: {
    subtitle: "Embrace the warmth of winter fragrances",
    fullDescription:
      "Winter calls for rich, enveloping fragrances that provide comfort against the cold. Think warm spices, deep woods, sweet vanilla, and cozy amber notes that wrap you like a favorite sweater. These scents have the depth and longevity to cut through winter air and leave a lasting impression.",
    settings: [
      {
        title: "Holiday Gatherings",
        description:
          "Rich, festive scents perfect for celebrations and family time.",
        image: HolidayGatheringsImg,
      },
      {
        title: "Cozy Evenings",
        description: "Warm, comforting fragrances for intimate indoor moments.",
        image: CozyEveningImg,
      },
      {
        title: "Cold Weather",
        description:
          "Long-lasting scents that stand up to harsh winter conditions.",
        image: ColdWeatherCommuteImg,
      },
    ],
  },
  spring: {
    subtitle: "Awaken your senses with spring freshness",
    fullDescription:
      "Spring fragrances capture the essence of renewal and rebirth. Light florals, green notes, and fresh citrus embody the season's optimism. These scents are perfect for transitioning from heavy winter fragrances to something more uplifting and energetic.",
    settings: [
      {
        title: "Outdoor Activities",
        description:
          "Fresh, natural scents that complement time spent in nature.",
        image: OutdoorActivitiesImg,
      },
      {
        title: "Daytime Events",
        description:
          "Light, cheerful fragrances perfect for garden parties and brunches.",
        image: DaytimeEventsImg,
      },
      {
        title: "Fresh Starts",
        description:
          "Energizing scents for new beginnings and spring cleaning.",
        image: FreshStartsImg,
      },
    ],
  },
  summer: {
    subtitle: "Stay fresh and vibrant in the heat",
    fullDescription:
      "Summer demands light, refreshing fragrances that won't overwhelm in the heat. Aquatic notes, citrus bursts, and tropical fruits create an invigorating aura. These scents are designed to be bright and airy, perfect for hot weather and outdoor adventures.",
    settings: [
      {
        title: "Beach Days",
        description:
          "Aquatic and citrus scents that evoke ocean breezes and sunshine.",
        image: BeachDaysImg,
      },
      {
        title: "Tropical Vacations",
        description: "Exotic, fruity fragrances for paradise destinations.",
        image: TropicalVacationImg,
      },
      {
        title: "Hot Weather Work",
        description: "Light, professional scents that stay fresh all day.",
        image: SummerOfficeImg,
      },
    ],
  },
  autumn: {
    subtitle: "Embrace the transition with warm, spicy notes",
    fullDescription:
      "Autumn fragrances bridge summer's lightness and winter's warmth. Spicy notes like cinnamon and cardamom blend with woody accords and hints of sweetness. These transitional scents perfectly capture falling leaves, crisp air, and cozy sweater weather.",
    settings: [
      {
        title: "Fall Fashion",
        description:
          "Sophisticated scents that complement layered autumn outfits.",
        image: FallFashionImg,
      },
      {
        title: "Harvest Season",
        description: "Rich, earthy fragrances inspired by autumn's bounty.",
        image: HarvestSeasonImg,
      },
      {
        title: "Cooler Evenings",
        description:
          "Warm, inviting scents for bonfires and twilight gatherings.",
        image: CoolEveningImg,
      },
    ],
  },
};
