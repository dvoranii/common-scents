// src/data/noteImages.ts
import GreenAppleImg from "/assets/images/FragranceReviews/FragranceNotes/green-apple.webp";
import CinnamonImg from "/assets/images/FragranceReviews/FragranceNotes/cinnamon.webp";
import LavenderImg from "/assets/images/FragranceReviews/FragranceNotes/lavender.webp";
import BergamotImg from "/assets/images/FragranceReviews/FragranceNotes/bergamot.webp";
import OrangeBlossomImg from "/assets/images/FragranceReviews/FragranceNotes/orange-blossom.webp";
import LilyoftheValleyImg from "/assets/images/FragranceReviews/FragranceNotes/lily-of-the-valley.webp";
import VanillaImg from "/assets/images/FragranceReviews/FragranceNotes/vanilla.webp";
import TonkaBeanImg from "/assets/images/FragranceReviews/FragranceNotes/tonka-bean.webp";
import AmberImg from "/assets/images/FragranceReviews/FragranceNotes/amber.webp";
import PatchouliImg from "/assets/images/FragranceReviews/FragranceNotes/patchouli.webp";
import LemonImg from "/assets/images/FragranceReviews/FragranceNotes/lemon.webp";
import PinkPepperImg from "/assets/images/FragranceReviews/FragranceNotes/pink-pepper.webp";
import GeraniumImg from "/assets/images/FragranceReviews/FragranceNotes/geranium.webp";
import RosemaryImg from "/assets/images/FragranceReviews/FragranceNotes/rosemary.webp";
import SageImg from "/assets/images/FragranceReviews/FragranceNotes/sage.webp";
import NutmegImg from "/assets/images/FragranceReviews/FragranceNotes/nutmeg.webp";
import VetiverImg from "/assets/images/FragranceReviews/FragranceNotes/vetiver.webp";
import CedarImg from "/assets/images/FragranceReviews/FragranceNotes/cedar.webp";
import SandalwoodImg from "/assets/images/FragranceReviews/FragranceNotes/sandalwood.webp";
import OlibanumImg from "/assets/images/FragranceReviews/FragranceNotes/olibanum.webp";
import MandarinOrangeImg from "/assets/images/FragranceReviews/FragranceNotes/mandarin-orange.webp";
import GrapefruitImg from "/assets/images/FragranceReviews/FragranceNotes/grapefruit.webp";
import MintImg from "/assets/images/FragranceReviews/FragranceNotes/mint.webp";
import ClovesImg from "/assets/images/FragranceReviews/FragranceNotes/cloves.webp";
import GingerImg from "/assets/images/FragranceReviews/FragranceNotes/ginger.webp";
import PepperImg from "/assets/images/FragranceReviews/FragranceNotes/pepper.webp";
import SpicyNotesImg from "/assets/images/FragranceReviews/FragranceNotes/spicy-notes.webp";
import WoodyNotesImg from "/assets/images/FragranceReviews/FragranceNotes/woody-notes.webp";
import LeatherImg from "/assets/images/FragranceReviews/FragranceNotes/leather.webp";
import TobaccoImg from "/assets/images/FragranceReviews/FragranceNotes/tobacco.webp";
import HoneyImg from "/assets/images/FragranceReviews/FragranceNotes/honey.webp";
import BenzoinImg from "/assets/images/FragranceReviews/FragranceNotes/benzoin.webp";
import SaffronImg from "/assets/images/FragranceReviews/FragranceNotes/Saffron.jpg";
import JasmineImg from "/assets/images/FragranceReviews/FragranceNotes/Jasmine.jpg";
import AmberwoodImg from "/assets/images/FragranceReviews/FragranceNotes/Amberwood.jpg";
import AmbergrisImg from "/assets/images/FragranceReviews/FragranceNotes/Ambergris.jpg";
import HedioneImg from "/assets/images/FragranceReviews/FragranceNotes/Hedione.jpg";

export const noteImages: Record<string, string> = {
  "Green Apple": GreenAppleImg,
  Saffron: SaffronImg,
  Cinnamon: CinnamonImg,
  Jasmine: JasmineImg,
  "Wild Lavender": LavenderImg,
  Lavender: LavenderImg,
  Bergamot: BergamotImg,
  "Orange Blossom": OrangeBlossomImg,
  "Lily of the Valley": LilyoftheValleyImg,
  Vanilla: VanillaImg,
  Amberwood: AmberwoodImg,
  "Tonka Bean": TonkaBeanImg,
  Amber: AmberImg,
  Patchouli: PatchouliImg,
  Ambergris: AmbergrisImg,
  Lemon: LemonImg,
  "Pink Pepper": PinkPepperImg,
  Geranium: GeraniumImg,
  Rosemary: RosemaryImg,
  Sage: SageImg,
  Nutmeg: NutmegImg,
  Vetiver: VetiverImg,
  Hedione: HedioneImg,
  Cedar: CedarImg,
  Sandalwood: SandalwoodImg,
  Olibanum: OlibanumImg,
  "Mandarin Orange": MandarinOrangeImg,
  Grapefruit: GrapefruitImg,
  Mint: MintImg,
  Cloves: ClovesImg,
  Ginger: GingerImg,
  Pepper: PepperImg,
  "Spicy Notes": SpicyNotesImg,
  "Woody Notes": WoodyNotesImg,
  Leather: LeatherImg,
  Tobacco: TobaccoImg,
  Honey: HoneyImg,
  Benzoin: BenzoinImg,
};

export const getNote = (name: string) => ({
  name,
  image: noteImages[name] || "",
});
