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
        title: "Holiday Gatherings",
        description:
          "Rich, festive scents perfect for celebrations and family time.",
        image:
          "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800",
      },
      {
        title: "Cozy Evenings",
        description: "Warm, comforting fragrances for intimate indoor moments.",
        image:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      },
      {
        title: "Cold Weather Commute",
        description:
          "Long-lasting scents that stand up to harsh winter conditions.",
        image:
          "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800",
      },
    ],
  },
  spring: {
    subtitle: "Awaken your senses with spring freshness",
    fullDescription:
      "Spring fragrances capture the essence of renewal and rebirth. Light florals, green notes, and fresh citrus embody the season's optimism. These scents are perfect for transitioning from heavy winter fragrances to something more uplifting and energetic.",
    settings: [
      {
        title: "Outdoor Activities",
        description:
          "Fresh, natural scents that complement time spent in nature.",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
      },
      {
        title: "Daytime Events",
        description:
          "Light, cheerful fragrances perfect for garden parties and brunches.",
        image:
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      },
      {
        title: "Fresh Starts",
        description:
          "Energizing scents for new beginnings and spring cleaning.",
        image:
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
      },
    ],
  },
  summer: {
    subtitle: "Stay fresh and vibrant in the heat",
    fullDescription:
      "Summer demands light, refreshing fragrances that won't overwhelm in the heat. Aquatic notes, citrus bursts, and tropical fruits create an invigorating aura. These scents are designed to be bright and airy, perfect for hot weather and outdoor adventures.",
    settings: [
      {
        title: "Beach Days",
        description:
          "Aquatic and citrus scents that evoke ocean breezes and sunshine.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      },
      {
        title: "Tropical Vacations",
        description: "Exotic, fruity fragrances for paradise destinations.",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      },
      {
        title: "Hot Weather Work",
        description: "Light, professional scents that stay fresh all day.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      },
    ],
  },
  autumn: {
    subtitle: "Embrace the transition with warm, spicy notes",
    fullDescription:
      "Autumn fragrances bridge summer's lightness and winter's warmth. Spicy notes like cinnamon and cardamom blend with woody accords and hints of sweetness. These transitional scents perfectly capture falling leaves, crisp air, and cozy sweater weather.",
    settings: [
      {
        title: "Fall Fashion",
        description:
          "Sophisticated scents that complement layered autumn outfits.",
        image:
          "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=800",
      },
      {
        title: "Harvest Season",
        description: "Rich, earthy fragrances inspired by autumn's bounty.",
        image:
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800",
      },
      {
        title: "Cooler Evenings",
        description:
          "Warm, inviting scents for bonfires and twilight gatherings.",
        image:
          "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=800",
      },
    ],
  },
};
