interface Setting {
  title: string;
  description: string;
  images?: string[];
}

export interface OccasionDetail {
  subtitle?: string;
  fullDescription: string;
  settings: Setting[];
}

interface NoteProfile {
  title: string;
  description: string;
  examples: {
    image: string;
    alt: string;
    title: string;
  }[];
}

export interface CategoryDetail {
  subtitle?: string;
  image?: string;
  fullDescription: string;
  noteProfiles: NoteProfile[];
  characteristics: CharacteristicItem[];
  bestFor: BestForItem[];
}

export interface CharacteristicItem {
  text: string;
  color: string;
}

export interface BestForItem {
  text: string;
  color: string;
}
