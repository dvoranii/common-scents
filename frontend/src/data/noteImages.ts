// src/data/noteImages.ts
import GreenAppleImg from "/assets/images/FragranceReviews/FragranceNotes/green-apple.jpg";
import CinnamonImg from "/assets/images/FragranceReviews/FragranceNotes/cinnamon.jpg";
import LavenderImg from "/assets/images/FragranceReviews/FragranceNotes/lavender.jpg";
import BergamotImg from "/assets/images/FragranceReviews/FragranceNotes/bergamot.jpg";
import OrangeBlossomImg from "/assets/images/FragranceReviews/FragranceNotes/orange-blossom.jpg";
import LilyoftheValleyImg from "/assets/images/FragranceReviews/FragranceNotes/lily-of-the-valley.jpg";
import VanillaImg from "/assets/images/FragranceReviews/FragranceNotes/vanilla.jpg";
import TonkaBeanImg from "/assets/images/FragranceReviews/FragranceNotes/tonka-bean.jpg";
import AmberImg from "/assets/images/FragranceReviews/FragranceNotes/amber.jpg";
import PatchouliImg from "/assets/images/FragranceReviews/FragranceNotes/patchouli.jpg";
import LemonImg from "/assets/images/FragranceReviews/FragranceNotes/lemon.jpg";
import PinkPepperImg from "/assets/images/FragranceReviews/FragranceNotes/pink-pepper.jpg";
import GeraniumImg from "/assets/images/FragranceReviews/FragranceNotes/geranium.jpg";
import RosemaryImg from "/assets/images/FragranceReviews/FragranceNotes/rosemary.jpg";
import SageImg from "/assets/images/FragranceReviews/FragranceNotes/sage.jpg";
import NutmegImg from "/assets/images/FragranceReviews/FragranceNotes/nutmeg.jpg";
import VetiverImg from "/assets/images/FragranceReviews/FragranceNotes/vetiver.jpg";
import CedarImg from "/assets/images/FragranceReviews/FragranceNotes/cedar.jpg";
import SandalwoodImg from "/assets/images/FragranceReviews/FragranceNotes/sandalwood.jpg";
import OlibanumImg from "/assets/images/FragranceReviews/FragranceNotes/olibanum.jpg";
import MandarinOrangeImg from "/assets/images/FragranceReviews/FragranceNotes/mandarin-orange.jpg";
import GrapefruitImg from "/assets/images/FragranceReviews/FragranceNotes/grapefruit.jpg";
import MintImg from "/assets/images/FragranceReviews/FragranceNotes/mint.jpg";
import ClovesImg from "/assets/images/FragranceReviews/FragranceNotes/cloves.jpg";
import GingerImg from "/assets/images/FragranceReviews/FragranceNotes/ginger.jpg";
import PepperImg from "/assets/images/FragranceReviews/FragranceNotes/pepper.jpg";
import SpicyNotesImg from "/assets/images/FragranceReviews/FragranceNotes/spicy-notes.jpg";
import WoodyNotesImg from "/assets/images/FragranceReviews/FragranceNotes/woody-notes.jpg";
import LeatherImg from "/assets/images/FragranceReviews/FragranceNotes/leather.jpg";
import TobaccoImg from "/assets/images/FragranceReviews/FragranceNotes/tobacco.jpg";
import HoneyImg from "/assets/images/FragranceReviews/FragranceNotes/honey.jpg";
import BenzoinImg from "/assets/images/FragranceReviews/FragranceNotes/benzoin.jpg";

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
