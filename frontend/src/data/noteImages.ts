// src/data/noteImages.ts
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
import TobaccoImg from "../assets/FragranceReviews/FragranceNotes/tobacco.jpg";
import HoneyImg from "../assets/FragranceReviews/FragranceNotes/honey.jpg";
import BenzoinImg from "../assets/FragranceReviews/FragranceNotes/benzoin.jpg";

export const noteImages: Record<string, string> = {
  "Green Apple": GreenAppleImg,
  Cinnamon: CinnamonImg,
  "Wild Lavender": LavenderImg,
  Lavender: LavenderImg,
  Bergamot: BergamotImg,
  "Orange Blossom": OrangeBlossomImg,
  "Lily of the Valley": LilyoftheValleyImg,
  Vanilla: VanillaImg,
  "Tonka Bean": TonkaBeanImg,
  Amber: AmberImg,
  Patchouli: PatchouliImg,
  Lemon: LemonImg,
  "Pink Pepper": PinkPepperImg,
  Geranium: GeraniumImg,
  Rosemary: RosemaryImg,
  Sage: SageImg,
  Nutmeg: NutmegImg,
  Vetiver: VetiverImg,
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
