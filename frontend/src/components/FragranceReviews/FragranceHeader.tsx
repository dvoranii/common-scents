import type { Fragrance } from "../../types/fragrance.types";
import {
  HeaderWrapper,
  BrandName,
  FragranceName,
  MetadataItem,
  HeroSection,
  BottleImage,
  RatingContainer,
  RatingCount,
  RatingValue,
  HouseLogo,
  HouseLogoWrapper,
  BrandWrapper,
  AccordsAndLogoWrapper,
  BottleWrapper,
} from "./FragranceHeader.styled";
import RatingStars from "./RatingStars/RatingStars";
import { NotesDisplay } from "./NoteDisplay/NoteDisplay";
import { AccordsDisplay } from "./AccordsDisplay/AccordsDisplay";
import { getAccordsForNote } from "../../utils/accordMappings";
import { useState } from "react";

interface Props {
  fragrance: Fragrance;
  bottleImageSize?: "small" | "medium" | "large" | "xlarge";
}

export const FragranceHeader: React.FC<Props> = ({
  fragrance,
  bottleImageSize = "medium",
}) => {
  const [selectedAccord, setSelectedAccord] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const handleAccordClick = (accordName: string) => {
    if (selectedAccord === accordName) {
      setSelectedAccord(null);
      setSelectedNote(null);
    } else {
      setSelectedAccord(accordName);
      setSelectedNote(null);
    }
  };

  const handleNoteClick = (noteName: string) => {
    if (selectedNote === noteName) {
      setSelectedNote(null);
      setSelectedAccord(null);
    } else {
      setSelectedNote(noteName);
      setSelectedAccord(null);
    }
  };

  const highlightedAccords = selectedNote
    ? getAccordsForNote(selectedNote)
    : [];

  return (
    <>
      <HeaderWrapper>
        <BrandWrapper>
          <BrandName>{fragrance.house}</BrandName>
          <FragranceName>{fragrance.name}</FragranceName>
        </BrandWrapper>

        <MetadataItem>
          {fragrance.releaseYear}&nbsp;&nbsp;•&nbsp;&nbsp;
          {fragrance.concentration}
          &nbsp;&nbsp;•&nbsp;&nbsp;${fragrance.price}/100ml
        </MetadataItem>

        {fragrance.rating && (
          <RatingContainer>
            <RatingValue>{fragrance.rating.toFixed(1)}</RatingValue>
            <RatingStars rating={fragrance.rating} />
            <RatingCount>({fragrance.ratingCount} ratings)</RatingCount>
          </RatingContainer>
        )}
      </HeaderWrapper>

      <HeroSection>
        <BottleWrapper>
          <BottleImage
            src={fragrance.heroImage}
            alt={`${fragrance.name} bottle`}
            $size={bottleImageSize}
          />
        </BottleWrapper>
        <AccordsAndLogoWrapper>
          <AccordsDisplay
            accords={fragrance.accords}
            onAccordClick={handleAccordClick}
            selectedAccord={selectedAccord}
            highlightedAccords={highlightedAccords}
          />
          {fragrance.houseLogo && (
            <HouseLogoWrapper>
              <HouseLogo src={fragrance.houseLogo} />
            </HouseLogoWrapper>
          )}
        </AccordsAndLogoWrapper>

        <NotesDisplay
          notes={fragrance.notes}
          selectedAccord={selectedAccord}
          selectedNote={selectedNote}
          onNoteClick={handleNoteClick}
        />
      </HeroSection>
    </>
  );
};
