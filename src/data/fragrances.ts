import type { Fragrance } from "../types/fragrance.types";
import Afnan9pmBottle from "../assets/fragrance-pics/Afnan-9pm.webp";
import VikingCologneBottle from "../assets/fragrance-pics/viking-cologne.webp";
import ClubDeNuitManBottle from "../assets/fragrance-pics/armaf-clubdenuitman.jpg";

export const fragrances: Fragrance[] = [
  {
    id: "1",
    slug: "afnan-9pm",
    name: "Afnan 9PM",
    house: "Afnan",
    releaseYear: 2020,
    concentration: "EDP",
    price: 35,
    season: ["Fall", "Winter"],
    occasion: ["Date Night", "Evening"],
    type: ["Oriental", "Gourmande"],
    categorySlugs: ["oriental", "gourmande"],
    thumbnailImage: Afnan9pmBottle,
    heroImage: Afnan9pmBottle,
    fragranticaUrl: "https://www.fragrantica.com/perfume/Afnan/9pm-65414.html",
    youtubeUrl: "",
    longevity: 8,
    projection: 7,
    rating: 4.5,
    shortDescription:
      "A sophisticated evening scent that punches above its price point. Often called the best Ultramale clone.",
    reviewContent: {
      overview:
        "A sophisticated evening scent that punches above its price point. Afnan 9PM is often called the best Ultramale clone, and for good reason. This fragrance delivers incredible performance and a crowd-pleasing scent profile at a fraction of the cost of its inspiration.",
      notes: {
        top: ["Apple", "Cinnamon"],
        heart: ["Orange Blossom", "Lavender"],
        base: ["Vanilla", "Tonka Bean", "Patchouli"],
      },
      notesDescription:
        "Opens with a crisp apple and warm cinnamon that immediately grabs attention. The heart brings in floral sophistication with orange blossom and lavender, while the base settles into a warm, sweet blend of vanilla and tonka bean with a touch of earthy patchouli.",
      bestTime:
        "Perfect for fall/winter date nights or evening events. The sweetness and warmth make it ideal for cooler weather when you want to make an impression. Don't wear this to the office unless you want everyone asking what you're wearing.",
      whoShouldWear:
        "Best worn with a dark jacket, boots, and quiet confidence. This isn't a gym scent - save it for when you're trying to turn heads. If you're the type who wears leather jackets and knows how to dress, this is your scent.",
      performance:
        "Longevity is impressive for the price point - easily 8+ hours on skin, even longer on clothes. Projection is strong for the first 2-3 hours, then settles into a pleasant skin scent. Keep a travel decant for touch-ups if you're going to be out all night.",
      reactions:
        "My girlfriend loves this one. Gets compliments every time I wear it. The sweet, spicy profile is crowd-pleasing without being generic. Just don't overspray - 3-4 sprays is plenty.",
      conclusion:
        "At $35, this is an absolute steal. If you like sweet, spicy fragrances and don't want to drop $150+ on Ultramale, this is a no-brainer. Yes, it's synthetic. Yes, it's a clone. But it smells good and performs well. That's what matters.",
    },
  },
  {
    id: "2",
    slug: "creed-viking-cologne",
    name: "Creed Viking Cologne",
    house: "Creed",
    concentration: "Cologne",
    releaseYear: 2021,
    price: 325,
    season: ["Spring", "Summer"],
    occasion: ["Casual", "Office"],
    type: ["Fresh", "Citrus", "Aromatic"],
    categorySlugs: ["fresh-citrus", "fougere"],
    thumbnailImage: VikingCologneBottle,
    heroImage: VikingCologneBottle,
    fragranticaUrl:
      "https://www.fragrantica.com/perfume/Armaf/Club-de-Nuit-Man-27687.html",
    youtubeUrl: "",
    longevity: 6,
    projection: 5,
    rating: 4.0,
    shortDescription:
      "The most overhated Creed fragrance. Viking Cologne is actually a solid fresh scent if you can get past the hate.",
    reviewContent: {
      overview:
        "The most overhated Creed fragrance. Viking Cologne gets a bad rap in the fragrance community, but it's actually a solid fresh scent. Is it worth $325? That's debatable. But is it bad? Absolutely not. The fragrance snobs will tell you it's garbage, but they're wrong.",
      notes: {
        top: ["Lemon", "Mint", "Pink Pepper"],
        heart: ["Lavender", "Geranium"],
        base: ["Sandalwood", "Vetiver", "Patchouli"],
      },
      notesDescription:
        "Opens with a bright citrus and mint combination that's refreshing without being sharp or synthetic. The lavender in the heart adds sophistication and depth, while the woody base of sandalwood and vetiver keeps it grounded and masculine. It's fresh without being boring.",
      bestTime:
        "Perfect for spring and summer, especially in office or casual settings. Light enough for hot weather, sophisticated enough for professional environments. This is what you wear when you want to smell clean and expensive without trying too hard.",
      whoShouldWear:
        "Anyone who wants a clean, sophisticated fresh scent without being generic. If you're tired of Sauvage clones but still want something fresh and versatile, this is worth trying. Pairs well with crisp button-downs and summer suits.",
      performance:
        "Decent for a cologne concentration. 5-6 hours with moderate projection. Not a beast mode performer, but that's intentional - it's meant to be refined and close-to-skin. You'll need to reapply after lunch if you want it lasting all day.",
      reactions:
        "Less polarizing than Viking EDP. People appreciate the freshness without it being overwhelming. Not a compliment getter, but a solid everyday scent that won't offend anyone. Your coworkers will think you smell clean.",
      conclusion:
        "Overpriced? Yes. Bad? No. There are better value options (looking at you, Prada L'Homme), but if you love Creed and want something fresh for summer, this is solid. Just don't blind buy at full retail - get a decant first.",
    },
  },
  {
    id: "3",
    slug: "armaf-club-de-nuit-man",
    name: "Club De Nuit Man",
    house: "Armaf",
    releaseYear: 2015,
    concentration: "EDT",
    price: 30,
    season: ["Fall", "Winter", "Evening"],
    occasion: ["Date Night", "Clubbing", "Casual"],
    type: ["Spicy", "Oriental", "Sweet"],
    categorySlugs: ["spicy", "oriental"],
    thumbnailImage: ClubDeNuitManBottle,
    heroImage: ClubDeNuitManBottle,
    fragranticaUrl:
      "https://www.fragrantica.com/perfume/Armaf/Club-de-Nuit-Man-34696.html",
    youtubeUrl: "",
    longevity: 8,
    projection: 7,
    rating: 4.0,
    shortDescription:
      "A warm, spicy-sweet powerhouse often compared to Paco Rabanne 1 Million. Great performance for evening wear.",
    reviewContent: {
      overview:
        "The often-forgotten sibling, this is Armaf's take on the immensely popular Paco Rabanne 1 Million scent profile. It delivers a warm, spicy, and sweet experience that is perfect for colder weather and evening events, offering high performance at a low price.",
      notes: {
        top: ["Mandarin", "Grapefruit", "Mint"],
        heart: ["Cinnamon", "Clove", "Pepper"],
        base: ["Amber", "Leather", "Woody Notes"],
      },
      notesDescription:
        "Opens with a fleeting fresh burst of citrus and mint before quickly transitioning into its warm heart of cinnamon and spicy cloves. The dry down is a blend of creamy amber, sweet leather, and soft woods, giving it a rich and slightly boozy quality.",
      bestTime:
        "Ideal for fall, winter, and evening wear, particularly for date nights or going out. The sweetness and spice are too heavy for summer days or professional office settings.",
      whoShouldWear:
        "Perfect for the person who loves spicy, attention-grabbing scents like 1 Million. This is a loud, youthful, and confident fragrance that is meant to be noticed.",
      performance:
        "Strong performance. Expect 7-9 hours of longevity with solid projection for the first few hours. It's a performer, but not quite the nuclear beast that CDNIM is. 3-4 sprays should suffice.",
      reactions:
        "It's a crowd-pleaser, particularly among younger audiences. Expect compliments, especially in cooler weather. It's mass-appealing, similar to its inspiration.",
      conclusion:
        "If you love the Paco Rabanne 1 Million DNA but want a high-performing clone at a rock-bottom price, this is a fantastic option. It captures the spirit and warmth perfectly.",
    },
  },
];
