// src/components/FragranceReviews/NotesDisplay/NotesDisplay.tsx
import React from "react";
import type { FragranceNotes } from "../../../types/fragrance.types";
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
}

export const NotesDisplay: React.FC<NotesDisplayProps> = ({ notes }) => {
  if (!notes) return null;

  return (
    <NotesColumn>
      <NotesSectionTitle>Note Breakdown</NotesSectionTitle>

      {notes.top.length > 0 && (
        <>
          <NoteType>Top Notes</NoteType>
          <NotesGrid>
            {notes.top.map((note, index) => (
              <NoteItem key={`top-${index}`}>
                <NoteImage src={note.image} alt={note.name} />
                <NoteName>{note.name}</NoteName>
              </NoteItem>
            ))}
          </NotesGrid>
        </>
      )}

      {notes.middle && notes.middle.length > 0 && (
        <>
          <NoteType>Middle Notes</NoteType>
          <NotesGrid>
            {notes.middle.map((note, index) => (
              <NoteItem key={`middle-${index}`}>
                <NoteImage src={note.image} alt={note.name} />
                <NoteName>{note.name}</NoteName>
              </NoteItem>
            ))}
          </NotesGrid>
        </>
      )}

      {notes.base && notes.base.length > 0 && (
        <>
          <NoteType>Base Notes</NoteType>
          <NotesGrid>
            {notes.base.map((note, index) => (
              <NoteItem key={`base-${index}`}>
                <NoteImage src={note.image} alt={note.name} />
                <NoteName>{note.name}</NoteName>
              </NoteItem>
            ))}
          </NotesGrid>
        </>
      )}
    </NotesColumn>
  );
};
