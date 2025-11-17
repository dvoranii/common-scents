export type NoteName = string;

export interface AccordMapping {
  [accordName: string]: NoteName[];
}

export const accordNoteMappings: AccordMapping = {
  vanilla: ["Vanilla", "Tonka Bean", "Benzoin"],
  sweet: [
    "Vanilla",
    "Tonka Bean",
    "Honey",
    "Benzoin",
    "Green Apple",
    "Mandarin Orange",
    "Amber",
  ],
  honey: ["Honey", "Benzoin"],
  aromatic: [
    "Lavender",
    "Wild Lavender",
    "Rosemary",
    "Sage",
    "Mint",
    "Geranium",
    "Tobacco",
    "Patchouli",
    "Olibanum",
  ],
  amber: ["Vanilla", "Benzoin", "Amber", "Tonka Bean"],
  lavender: ["Lavender", "Wild Lavender"],
  green: ["Green Apple", "Mint", "Vetiver", "Sage", "Rosemary"],
  freshSpicy: [
    "Pink Pepper",
    "Ginger",
    "Mint",
    "Grapefruit",
    "Black Pepper",
    "Pepper",
    "Tobacco",
    "Pepper",
    "Cloves",
    "Spicy Notes",
    "Olibanum",
  ],
  powdery: [
    "Vanilla",
    "Tonka Bean",
    "Lavender",
    "Wild Lavender",
    "Iris",
    "Orange Blossom",
  ],
  warmSpicy: ["Cinnamon", "Nutmeg", "Cloves", "Ginger", "Tobacco"],
  cinnamon: ["Cinnamon"],
  fruity: ["Green Apple", "Mandarin Orange", "Grapefruit", "Lemon", "Bergamot"],
  fresh: [
    "Mint",
    "Grapefruit",
    "Lemon",
    "Bergamot",
    "Mandarin Orange",
    "Green Apple",
    "Lily of the Valley",
  ],
  citrus: ["Lemon", "Bergamot", "Grapefruit", "Mandarin Orange"],
  woody: [
    "Cedar",
    "Sandalwood",
    "Vetiver",
    "Patchouli",
    "Woody Notes",
    "Tonka Bean",
    "Leather",
    "Olibanum",
  ],
  leather: ["Leather", "Tobacco"],
  herbal: ["Rosemary", "Sage", "Mint", "Lavender", "Wild Lavender", "Geranium"],
  softSpicy: ["Cinnamon", "Nutmeg", "Pink Pepper", "Ginger", "Vanilla"],
  earthy: ["Patchouli", "Vetiver", "Tobacco", "Leather", "Nutmeg"],
  tobacco: ["Tobacco", "Leather", "Vanilla", "Honey"],

  // Additional mappings
  floral: [
    "Lavender",
    "Wild Lavender",
    "Orange Blossom",
    "Lily of the Valley",
    "Geranium",
  ],
  spicy: [
    "Cinnamon",
    "Nutmeg",
    "Cloves",
    "Ginger",
    "Pink Pepper",
    "Pepper",
    "Spicy Notes",
  ],
  resinous: ["Benzoin", "Vanilla", "Tonka Bean", "Olibanum", "Amber"],
};

export const normalizeAccordName = (accordName: string): string => {
  return accordName
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
};

export const getNotesForAccord = (accordName: string): NoteName[] => {
  const normalizedName = normalizeAccordName(accordName);
  return accordNoteMappings[normalizedName] || [];
};

export const isNoteInAccord = (
  noteName: string,
  accordName: string
): boolean => {
  const accordNotes = getNotesForAccord(accordName);
  return accordNotes.some(
    (accordNote) =>
      noteName.toLowerCase().includes(accordNote.toLowerCase()) ||
      accordNote.toLowerCase().includes(noteName.toLowerCase())
  );
};

export const getAccordsForNote = (noteName: string): string[] => {
  return Object.keys(accordNoteMappings).filter((accordKey) => {
    const notes = accordNoteMappings[accordKey];
    return notes.some(
      (note) =>
        note.toLowerCase().includes(noteName.toLowerCase()) ||
        noteName.toLowerCase().includes(note.toLowerCase())
    );
  });
};
