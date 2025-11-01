export interface Fragrance {
  id: string;
  slug: string;
  name: string;
  house: string;
  releaseYear?: number;
  concentration?: string;
  price?: number;
  season?: string[];
  occasion?: string[];
  type?: string[];
  thumbnailImage: string;
  heroImage?: string;
  fragranticaUrl: string;
  youtubeUrl?: string;
  longevity?: number;
  projection?: number;
  rating?: number;
  shortDescription: string;
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

export interface Guide {
  id: string;
  slug: string;
  title: string;
  author?: string;
  date?: string;
  category?: string;
  thumbnailImage?: string;
}

export interface Category {
  name: string;
  icon: React.ElementType;
  iconColor?: string;
  color: string;
  slug: string;
}
