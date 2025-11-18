import { accordNoteMappings } from "../data/accordMappings";
import type { NoteName } from "../data/accordMappings";

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
