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
  CurrencySelect,
} from "./FragranceHeader.styled";
import RatingStars from "./RatingStars/RatingStars";
import { NotesDisplay } from "./NoteDisplay/NoteDisplay";
import { AccordsDisplay } from "./AccordsDisplay/AccordsDisplay";
import { getAccordsForNote } from "../../utils/accordMappings";
import { useState } from "react";
import { Link } from "react-router-dom";

type Currency = "USD" | "CAD" | "GBP";
interface Props {
  fragrance: Fragrance;
  bottleImageSize?: "small" | "medium" | "large" | "xlarge";
  currency?: Currency;
}

export const FragranceHeader: React.FC<Props> = ({
  fragrance,
  bottleImageSize = "medium",
  currency: initialCurrency = "CAD",
}) => {
  const [selectedAccord, setSelectedAccord] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Currency>(initialCurrency);

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

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  };

  const highlightedAccords = selectedNote
    ? getAccordsForNote(selectedNote)
    : [];

  const formatPrice = (
    priceCAD: number | undefined,
    targetCurrency: Currency
  ): string => {
    if (priceCAD === undefined) {
      return "N/A";
    }

    let convertedPrice = priceCAD;
    let symbol = "";

    switch (targetCurrency) {
      case "USD":
        convertedPrice = priceCAD / 1.35;
        symbol = "$";
        break;
      case "GBP":
        convertedPrice = (priceCAD / 1.35) * 0.8;
        symbol = "£";
        break;
      default:
        convertedPrice = priceCAD;
        symbol = "CA$";
        break;
    }
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };

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
          &nbsp;&nbsp;•&nbsp;&nbsp;{formatPrice(fragrance.price, currency)}
          {fragrance.price !== undefined ? "/100ml" : ""}
          &nbsp;&nbsp;
          <CurrencySelect value={currency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
          </CurrencySelect>
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
              <Link
                to={`/fragrance-reviews?tags=${encodeURIComponent(
                  fragrance.house
                )}`}
              >
                <HouseLogo
                  src={fragrance.houseLogo}
                  alt={`${fragrance.house} logo`}
                />
              </Link>
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
