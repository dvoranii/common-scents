import type { LucideIcon } from "lucide-react";

export interface Fragrance {
  id: string;
  slug: string;
  name: string;
  house: string;
  houseLogo: string;
  releaseYear?: number;
  concentration?: string;
  price?: number;
  seasons?: string[];
  seasonSlugs?: string[];
  occasion?: string[];
  occasionSlugs?: string[];
  category?: string[];
  notes?: FragranceNotes;
  accords?: Accords[];
  categorySlugs: string[];
  thumbnailImage: string;
  heroImage?: string;
  fragranticaUrl: string;
  youtubeUrl?: string;
  longevity?: number;
  longevityStages?: Array<{ name: string; value: string }>;
  projection?: number;
  sillage?: number;
  versatility?: number;
  rating: number;
  ratingCount: string;
  shortDescription: string;
  perfumers?: Perfumer[];
  reviewContent?: {
    overview: string;
    notes?: {
      top: string[];
      heart: string[];
      base: string[];
    };
    notesDescription?: string;
    bestTime?: string;
    whoShouldWear?: string;
    performance?: string;
    reactions?: string;
    conclusion?: string;
  };
}

interface Note {
  name: string;
  image: string;
}

export interface FragranceNotes {
  top: Note[];
  middle: Note[];
  base: Note[];
}

export interface Perfumer {
  name: string;
  image: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  author?: string;
  date: string;
  time: string;
  category?: string;
  description: string;
  thumbnailImage?: string;
  topics?: string[];
  tags?: string[];
}
export interface Academy {
  id: string;
  slug: string;
  title: string;
  author?: string;
  date: string;
  time: string;
  category?: string;
  description: string;
  thumbnailImage?: string;
  topics?: string[];
  contentType?: string[];
  tags?: string[];
}
export interface Category {
  name: string;
  icon: LucideIcon;
  iconColor?: string;
  color: string;
  slug: string;
  description?: string;
}

export interface Occasion {
  name: string;
  slug: string;
  image: string;
  thumbnail?: string;
  video?: string;
  description: string;
}

export interface Accords {
  name: string;
  width: string;
  background: string;
  color: string;
}

export interface Season {
  name: string;
  slug: string;
  image: string;
  thumbnail: string;
  description: string;
}
