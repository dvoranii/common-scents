// src/data/occasionDetails.ts

interface Setting {
  title: string;
  description: string;
  examples: string[];
}

interface OccasionDetail {
  subtitle?: string;
  fullDescription: string;
  settings: Setting[];
}

export const occasionDetails: Record<string, OccasionDetail> = {
  "date-night": {
    subtitle: "Fragrances that set the mood.",
    fullDescription:
      "Date Night fragrances are designed to captivate — warm, sweet, and magnetic scents that leave a lasting impression. These are scents that invite closeness, spark attraction, and project confidence without overwhelming your partner. Think seductive vanilla, smooth tonka bean, or spicy cardamom — notes that create an aura of intrigue.",
    settings: [
      {
        title: "Casual Bar",
        description:
          "Playful and energetic — perfect for first dates or casual meetups.",
        examples: ["Versace Eros", "Ferragamo Uomo"],
      },
      {
        title: "Dinner Date",
        description:
          "Smooth and seductive scents that complement an intimate setting.",
        examples: ["Stronger With You Intensely", "Le Male Le Parfum"],
      },
      {
        title: "Outdoor Walk",
        description:
          "Fresh and inviting, leaving a pleasant trail without being heavy.",
        examples: ["Bleu de Chanel", "Dior Homme Cologne"],
      },
    ],
  },
  "daily-driver": {
    subtitle: "Your everyday signature.",
    fullDescription:
      "Daily Driver fragrances are the workhorses of your collection — versatile, easy-to-wear scents that work in virtually any situation. These are crowd-pleasers that won't offend in close quarters, yet still make a subtle statement. Perfect for running errands, casual hangouts, or days when you want to smell great without overthinking it.",
    settings: [
      {
        title: "Work From Home",
        description:
          "Light and uplifting scents that boost your mood throughout the day.",
        examples: ["Dior Homme Cologne", "Acqua di Gio"],
      },
      {
        title: "Casual Outings",
        description:
          "Universally appealing fragrances for shopping, coffee dates, or errands.",
        examples: ["Bleu de Chanel EDT", "Versace Pour Homme"],
      },
      {
        title: "Weekend Comfort",
        description:
          "Relaxed, easy-going scents for low-key weekend activities.",
        examples: ["L'Homme Yves Saint Laurent", "Prada L'Homme"],
      },
    ],
  },
  "night-out": {
    subtitle: "Own the room.",
    fullDescription:
      "Night Out fragrances are bold, attention-grabbing, and unapologetically loud. These are the scents that announce your presence before you enter the room — sweet, spicy, and projection-heavy. Perfect for clubs, parties, and any environment where you want to stand out and be remembered.",
    settings: [
      {
        title: "Nightclub",
        description:
          "Powerful, sweet fragrances that cut through crowds and loud music.",
        examples: ["Versace Eros", "One Million Prive"],
      },
      {
        title: "House Party",
        description:
          "Bold scents that make an impression in close social settings.",
        examples: ["Invictus Legend", "Stronger With You Intensely"],
      },
      {
        title: "Late Night Bar",
        description:
          "Seductive, mysterious fragrances for intimate nighttime venues.",
        examples: ["Spicebomb Extreme", "La Nuit de L'Homme"],
      },
    ],
  },
  formal: {
    subtitle: "Refined elegance.",
    fullDescription:
      "Formal fragrances exude sophistication and refinement — these are the scents you wear when you need to make a polished, professional impression. Think weddings, black-tie events, business dinners, and important meetings. These fragrances are complex, mature, and commanding without being overpowering.",
    settings: [
      {
        title: "Black Tie Events",
        description:
          "Luxurious, complex scents that match the elegance of formal attire.",
        examples: ["Dior Homme Intense", "Tom Ford Oud Wood"],
      },
      {
        title: "Wedding Guest",
        description:
          "Memorable yet appropriate fragrances that photograph well.",
        examples: ["Bleu de Chanel Parfum", "Creed Aventus"],
      },
      {
        title: "Business Dinner",
        description:
          "Sophisticated scents that command respect in professional settings.",
        examples: ["Terre d'Hermès", "Giorgio Armani Code"],
      },
    ],
  },
  office: {
    subtitle: "Professional and subtle.",
    fullDescription:
      "Office fragrances are the art of restraint — clean, fresh, and professional scents that enhance rather than dominate. These fragrances are designed for close-quarters environments where you want to smell good without overwhelming colleagues. Think crisp citrus, soft woods, and fresh aromatic notes.",
    settings: [
      {
        title: "Open Office",
        description:
          "Light, inoffensive fragrances perfect for shared workspaces.",
        examples: ["Prada L'Homme", "Dior Homme Cologne"],
      },
      {
        title: "Client Meetings",
        description: "Polished, professional scents that inspire confidence.",
        examples: ["Bleu de Chanel EDT", "Acqua di Gio Profumo"],
      },
      {
        title: "Video Calls",
        description: "Subtle scents for your own comfort during remote work.",
        examples: ["Versace Pour Homme", "L'Homme Yves Saint Laurent"],
      },
    ],
  },
  "active-gym": {
    subtitle: "Fresh energy.",
    fullDescription:
      "Active fragrances are built for movement — fresh, clean, and energizing scents that won't clash with sweat or become overwhelming during physical activity. These are light, aquatic, and citrus-forward fragrances that keep you feeling fresh throughout your workout or outdoor adventures.",
    settings: [
      {
        title: "Gym Session",
        description:
          "Ultra-light, fresh scents that won't become cloying when you sweat.",
        examples: ["Acqua di Gio", "Cool Water"],
      },
      {
        title: "Outdoor Sports",
        description: "Energizing fragrances for hiking, biking, or running.",
        examples: ["Dior Sauvage EDT", "Versace Man Eau Fraiche"],
      },
      {
        title: "Post-Workout",
        description: "Clean, refreshing scents to apply after showering.",
        examples: ["Prada Luna Rossa", "Bleu de Chanel EDT"],
      },
    ],
  },
  "summer-vibes": {
    subtitle: "Bright, breezy, sun-soaked.",
    fullDescription:
      "Summer fragrances are all about freshness and vitality — light, citrusy, aquatic scents that evoke beach days, tropical vacations, and sun-drenched afternoons. These fragrances are designed to be refreshing in heat, never heavy or suffocating. Perfect for hot weather and outdoor summer activities.",
    settings: [
      {
        title: "Beach Day",
        description:
          "Aquatic, fresh scents that complement sunscreen and sea breeze.",
        examples: ["Light Blue Pour Homme", "Versace Man Eau Fraiche"],
      },
      {
        title: "Summer Party",
        description: "Vibrant, tropical fragrances for outdoor gatherings.",
        examples: ["Dior Homme Cologne", "Acqua di Gio"],
      },
      {
        title: "Vacation Mode",
        description:
          "Carefree, easy-wearing scents for traveling and relaxation.",
        examples: ["Prada Luna Rossa", "Bleu de Chanel EDT"],
      },
    ],
  },
  "cold-weather": {
    subtitle: "Warm, cozy, full-bodied.",
    fullDescription:
      "Cold Weather fragrances are the olfactory equivalent of a warm blanket — rich, spicy, and enveloping scents that thrive in cooler temperatures. These are full-bodied fragrances with heavy doses of vanilla, tonka, amber, and warm spices. Perfect for fall and winter when you want maximum projection and longevity.",
    settings: [
      {
        title: "Winter Nights",
        description:
          "Rich, heavy fragrances that project beautifully in cold air.",
        examples: ["Spicebomb Extreme", "Stronger With You Intensely"],
      },
      {
        title: "Holiday Gatherings",
        description: "Warm, inviting scents perfect for festive occasions.",
        examples: ["One Million Prive", "Le Male Le Parfum"],
      },
      {
        title: "Cozy Indoors",
        description:
          "Comforting fragrances for staying warm during cold months.",
        examples: ["Dior Homme Intense", "Giorgio Armani Code"],
      },
    ],
  },
};
