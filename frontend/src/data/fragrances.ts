import type { Fragrance } from "../types/fragrance.types";

import Afnan9pmThumbnail from "../assets/FragranceThumbnails/Afnan-9pm.webp";
import Afnan9pmBottle from "../assets/FragranceReviews/FragranceBottles/9PM.png";
import AfnanLogo from "../assets/FragranceReviews/FragranceLogos/Afnan_Logo.webp";
import GaelMonteroImg from "../assets/FragranceReviews/Perfumers/Gael-Montero.png";

import VikingCologneThumbnail from "../assets/FragranceThumbnails/viking-cologne.webp";
import VikingCologneBottle from "../assets/FragranceReviews/FragranceBottles/VikingCologne.png";
import CreedLogo from "../assets/FragranceReviews/FragranceLogos/Creed_Logo.png";
import ErwinCreedImg from "../assets/FragranceReviews/Perfumers/Erwin-Creed.webp";
import OlivierCreedImg from "../assets/FragranceReviews/Perfumers/Olivier-Creed.jpg";

import ClubDeNuitManBottle from "../assets/FragranceReviews/FragranceBottles/armaf-cdnm.png";
import ClubDeNuitManThumbnail from "../assets/FragranceThumbnails/armaf-cdnm.png";
import ArmafLogo from "../assets/FragranceReviews/FragranceLogos/Armaf_Logo.png";

// Notes
import GreenAppleImg from "../assets/FragranceReviews/FragranceNotes/green-apple.jpg";
import CinnamonImg from "../assets/FragranceReviews/FragranceNotes/cinnamon.jpg";
import LavenderImg from "../assets/FragranceReviews/FragranceNotes/lavender.jpg";
import BergamotImg from "../assets/FragranceReviews/FragranceNotes/bergamot.jpg";
import OrangeBlossomImg from "../assets/FragranceReviews/FragranceNotes/orange-blossom.jpg";
import LilyoftheValleyImg from "../assets/FragranceReviews/FragranceNotes/lily-of-the-valley.jpg";
import VanillaImg from "../assets/FragranceReviews/FragranceNotes/vanilla.jpg";
import TonkaBeanImg from "../assets/FragranceReviews/FragranceNotes/tonka-bean.jpg";
import AmberImg from "../assets/FragranceReviews/FragranceNotes/amber.jpg";
import PatchouliImg from "../assets/FragranceReviews/FragranceNotes/patchouli.jpg";
import LemonImg from "../assets/FragranceReviews/FragranceNotes/lemon.jpg";
import PinkPepperImg from "../assets/FragranceReviews/FragranceNotes/pink-pepper.jpg";
import GeraniumImg from "../assets/FragranceReviews/FragranceNotes/geranium.jpg";
import RosemaryImg from "../assets/FragranceReviews/FragranceNotes/rosemary.jpg";
import SageImg from "../assets/FragranceReviews/FragranceNotes/sage.jpg";
import NutmegImg from "../assets/FragranceReviews/FragranceNotes/nutmeg.jpg";
import VetiverImg from "../assets/FragranceReviews/FragranceNotes/vetiver.jpg";
import CedarImg from "../assets/FragranceReviews/FragranceNotes/cedar.jpg";
import SandalwoodImg from "../assets/FragranceReviews/FragranceNotes/sandalwood.jpg";
import OlibanumImg from "../assets/FragranceReviews/FragranceNotes/olibanum.jpg";
import MandarinOrangeImg from "../assets/FragranceReviews/FragranceNotes/mandarin-orange.jpg";
import GrapefruitImg from "../assets/FragranceReviews/FragranceNotes/grapefruit.jpg";
import MintImg from "../assets/FragranceReviews/FragranceNotes/mint.jpg";
import ClovesImg from "../assets/FragranceReviews/FragranceNotes/cloves.jpg";
import GingerImg from "../assets/FragranceReviews/FragranceNotes/ginger.jpg";
import PepperImg from "../assets/FragranceReviews/FragranceNotes/pepper.jpg";
import SpicyNotesImg from "../assets/FragranceReviews/FragranceNotes/spicy-notes.jpg";
import WoodyNotesImg from "../assets/FragranceReviews/FragranceNotes/woody-notes.jpg";
import LeatherImg from "../assets/FragranceReviews/FragranceNotes/leather.jpg";

export const fragrances: Fragrance[] = [
  {
    id: "1",
    slug: "afnan-9pm",
    name: "9PM",
    house: "Afnan",
    houseLogo: AfnanLogo,
    perfumers: [{ name: "Gael Montero", image: GaelMonteroImg }],
    releaseYear: 2020,
    concentration: "EDP",
    price: 35,
    season: ["Fall", "Winter"],
    occasion: ["Date Night", "Night Out"],
    type: ["Oriental", "Gourmande"],
    notes: {
      top: [
        { name: "Green Apple", image: GreenAppleImg },
        { name: "Cinnamon", image: CinnamonImg },
        { name: "Wild Lavender", image: LavenderImg },
        { name: "Bergamot", image: BergamotImg },
      ],
      middle: [
        { name: "Orange Blossom", image: OrangeBlossomImg },
        { name: "Lily of the Valley", image: LilyoftheValleyImg },
      ],
      base: [
        { name: "Vanilla", image: VanillaImg },
        { name: "Tonka Bean", image: TonkaBeanImg },
        { name: "Amber", image: AmberImg },
        { name: "Patchouli", image: PatchouliImg },
      ],
    },
    categorySlugs: ["oriental", "gourmande"],
    thumbnailImage: Afnan9pmThumbnail,
    heroImage: Afnan9pmBottle,

    fragranticaUrl: "https://www.fragrantica.com/perfume/Afnan/9pm-65414.html",
    youtubeUrl: "",
    longevity: 8,
    projection: 7,
    rating: 4.4,
    ratingCount: "13,843",
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
    name: "Viking Cologne",
    house: "Creed",
    houseLogo: CreedLogo,
    perfumers: [
      {
        name: "Erwin Creed",
        image: ErwinCreedImg,
      },
      {
        name: "Olivier Creed",
        image: OlivierCreedImg,
      },
    ],
    concentration: "EDP",
    releaseYear: 2021,
    price: 350,
    season: ["Spring", "Summer"],
    occasion: ["Formal", "Office", "Daily Driver", "Summer Vibes"],
    type: ["Fresh", "Citrus", "Aromatic"],
    notes: {
      top: [
        { name: "Mandarin Orange", image: MandarinOrangeImg },
        { name: "Lemon", image: LemonImg },
        { name: "Pink Pepper", image: PinkPepperImg },
        { name: "Bergamot", image: BergamotImg },
      ],
      middle: [
        { name: "Lavender", image: LavenderImg },
        { name: "Geranium", image: GeraniumImg },
        { name: "Rosemary", image: RosemaryImg },
        { name: "Sage", image: SageImg },
        { name: "Nutmeg", image: NutmegImg },
      ],
      base: [
        { name: "Vetiver", image: VetiverImg },
        { name: "Cedar", image: CedarImg },
        { name: "Sandalwood", image: SandalwoodImg },
        { name: "Patchouli", image: PatchouliImg },
        { name: "Olibanum", image: OlibanumImg },
      ],
    },
    categorySlugs: ["fresh-citrus", "fougere"],
    thumbnailImage: VikingCologneThumbnail,
    heroImage: VikingCologneBottle,
    fragranticaUrl:
      "https://www.fragrantica.com/perfume/Armaf/Club-de-Nuit-Man-27687.html",
    youtubeUrl: "",
    longevity: 6,
    projection: 5,
    rating: 4.0,
    ratingCount: "1,102",
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
    houseLogo: ArmafLogo,
    releaseYear: 2015,
    concentration: "EDT",
    price: 30,
    season: ["Fall", "Winter", "Evening"],
    occasion: ["Date Night", "Night Out", "Daily Driver"],
    type: ["Spicy", "Oriental", "Sweet"],
    notes: {
      top: [
        { name: "Mandarin Orange", image: MandarinOrangeImg },
        { name: "Grapefruit", image: GrapefruitImg },
        { name: "Mint", image: MintImg },
      ],
      middle: [
        { name: "Cinnamon", image: CinnamonImg },
        { name: "Cloves", image: ClovesImg },
        { name: "Cloves", image: ClovesImg },
        { name: "Ginger", image: GingerImg },
        { name: "Pepper", image: PepperImg },
      ],
      base: [
        { name: "Amber", image: AmberImg },
        { name: "Spicy Notes", image: SpicyNotesImg },
        { name: "Woody Notes", image: WoodyNotesImg },
        { name: "Leather", image: LeatherImg },
        { name: "Patchouli", image: PatchouliImg },
      ],
    },
    categorySlugs: ["spicy", "oriental"],
    thumbnailImage: ClubDeNuitManThumbnail,
    heroImage: ClubDeNuitManBottle,
    fragranticaUrl:
      "https://www.fragrantica.com/perfume/Armaf/Club-de-Nuit-Man-34696.html",
    youtubeUrl: "",
    longevity: 8,
    projection: 7,
    rating: 4.0,
    ratingCount: "671",
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
