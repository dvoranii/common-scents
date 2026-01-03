// src/components/FragranceReviews/NotesDisplay/NotesDisplay.tsx
import React from "react";
import type { FragranceNotes } from "../../../types/fragrance.types";
import { isNoteInAccord } from "../../../utils/accordMappings";
import {
  NotesColumn,
  NotesSectionTitle,
  NoteType,
  NotesGrid,
  NoteItem,
  NoteImage,
  NoteName,
} from "./NoteDiplay.styled";

interface NotesDisplayProps {
  notes?: FragranceNotes;
  selectedAccord?: string | null;
  selectedNote?: string | null;
  onNoteClick?: (noteName: string) => void;
}

const getHighlightColor = (accord: string | null): string => {
  if (!accord) return "";

  const colorMap: { [key: string]: string } = {
    vanilla: "rgba(255, 255, 148, 0.3)",
    sweet: "rgba(255, 200, 200, 0.3)",
    honey: "rgba(255, 204, 0, 0.2)",
    aromatic: "rgba(100, 200, 100, 0.2)",
    amber: "rgba(255, 193, 7, 0.2)",
    lavender: "rgba(183, 183, 255, 0.3)",
    green: "rgba(144, 238, 144, 0.3)",
    freshSpicy: "rgba(255, 165, 0, 0.2)",
    powdery: "rgba(255, 205, 205, 0.3)",
    warmSpicy: "rgba(139, 69, 19, 0.2)",
    fruity: "rgba(255, 105, 180, 0.2)",
    cinnamon: "rgba(210, 105, 30, 0.2)",
    fresh: "rgba(173, 216, 230, 0.3)",
    citrus: "rgba(255, 255, 0, 0.2)",
    woody: "rgba(139, 69, 19, 0.2)",
    herbal: "rgba(152, 251, 152, 0.3)",
    softSpicy: "rgba(255, 140, 0, 0.2)",
    earthy: "rgba(160, 120, 80, 0.2)",
    leather: "rgba(101, 67, 33, 0.2)",
    tobacco: "rgba(121, 68, 59, 0.2)",
    whiteFloral: "rgba(240, 255, 240, 0.4)",
    metallic: "rgba(192, 192, 192, 0.3)",
    animalic: "rgba(165, 42, 42, 0.2)",
    floral: "rgba(255, 182, 193, 0.3)",
    spicy: "rgba(178, 34, 34, 0.2)",
    resinous: "rgba(210, 180, 140, 0.2)",
  };

  return colorMap[accord.toLowerCase()] || "rgba(100, 149, 237, 0.2)";
};

export const NotesDisplay: React.FC<NotesDisplayProps> = ({
  notes,
  selectedAccord,
  selectedNote,
  onNoteClick,
}) => {
  if (!notes) return null;

  const isNoteHighlightedFromAccord = (noteName: string): boolean => {
    if (!selectedAccord) return false;
    return isNoteInAccord(noteName, selectedAccord);
  };

  const isNoteSelected = (noteName: string): boolean => {
    return selectedNote === noteName;
  };

  const handleNoteClick = (noteName: string) => {
    if (selectedNote === noteName) {
      onNoteClick?.("");
    } else {
      onNoteClick?.(noteName);
    }
  };

  const renderNotes = (
    noteList: Array<{ name: string; image: string }>,
    noteType: string
  ) => (
    <NotesGrid>
      {noteList.map((note, index) => (
        <NoteItem
          key={`${noteType}-${index}`}
          $isHighlighted={isNoteHighlightedFromAccord(note.name)}
          $isSelected={isNoteSelected(note.name)}
          $highlightColor={getHighlightColor(selectedAccord || null)}
          $clickable={!!onNoteClick}
          onClick={() => handleNoteClick(note.name)}
        >
          <NoteImage src={note.image} alt={note.name} />
          <NoteName>{note.name}</NoteName>
        </NoteItem>
      ))}
    </NotesGrid>
  );

  return (
    <NotesColumn>
      <NotesSectionTitle>Note Breakdown</NotesSectionTitle>

      {notes.top.length > 0 && (
        <>
          <NoteType>Top Notes</NoteType>
          {renderNotes(notes.top, "top")}
        </>
      )}

      {notes.middle && notes.middle.length > 0 && (
        <>
          <NoteType>Middle Notes</NoteType>
          {renderNotes(notes.middle, "middle")}
        </>
      )}

      {notes.base && notes.base.length > 0 && (
        <>
          <NoteType>Base Notes</NoteType>
          {renderNotes(notes.base, "base")}
        </>
      )}
    </NotesColumn>
  );
};
