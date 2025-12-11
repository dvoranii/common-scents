import type { Fragrance } from "../../types/fragrance.types";
import * as S from "./FragranceHeader.styled";
import RatingStars from "./RatingStars/RatingStars";
import { NotesDisplay } from "./NoteDisplay/NoteDisplay";
import { AccordsDisplay } from "./AccordsDisplay/AccordsDisplay";
import { getAccordsForNote } from "../../utils/accordMappings";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PerfumersDisplay } from "../PerfumersDisplay/PerfumersDisplay";

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
      <S.HeaderWrapper>
        <S.BrandWrapper>
          <S.BrandName>{fragrance.house}</S.BrandName>
          <S.FragranceName>{fragrance.name}</S.FragranceName>
        </S.BrandWrapper>

        <S.MetadataItem>
          {fragrance.releaseYear}&nbsp;&nbsp;•&nbsp;&nbsp;
          {fragrance.concentration}
          &nbsp;&nbsp;•&nbsp;&nbsp;{formatPrice(fragrance.price, currency)}
          {fragrance.price !== undefined ? "/100ml" : ""}
          &nbsp;&nbsp;
          <S.CurrencySelect value={currency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
          </S.CurrencySelect>
        </S.MetadataItem>

        {fragrance.rating && (
          <S.RatingContainer>
            <S.RatingValue>{fragrance.rating.toFixed(1)}</S.RatingValue>
            <RatingStars rating={fragrance.rating} />
            <S.RatingCount>({fragrance.ratingCount} ratings)</S.RatingCount>
          </S.RatingContainer>
        )}
      </S.HeaderWrapper>

      <S.HeroSection>
        <S.BottleLongevityWrapper>
          <S.BottleImage
            src={fragrance.heroImage}
            alt={`${fragrance.name} bottle`}
            $size={bottleImageSize}
          />
          {fragrance.longevityStages &&
            fragrance.longevityStages.length > 0 && (
              <>
                <S.LongevityTable>
                  {fragrance.longevityStages.map((stage, index) => (
                    <S.TableHeader key={`header-${index}`}>
                      {stage.name}
                    </S.TableHeader>
                  ))}

                  {fragrance.longevityStages.map((stage, index) => (
                    <S.TableCell key={`value-${index}`}>
                      {stage.value}
                    </S.TableCell>
                  ))}
                </S.LongevityTable>
              </>
            )}

          <S.ProjectionAndSillageWrapper>
            <S.ContentWrapper>
              <p>{fragrance.projection}/10</p>
              <S.RatingBar>
                <S.RatingFill
                  $ratingFill="#F1565A"
                  $percentage={((fragrance.projection ?? 0) / 10) * 100}
                />
              </S.RatingBar>
              <p>
                <span>Projection</span>
              </p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <p>{fragrance.sillage}/10</p>
              <S.RatingBar>
                <S.RatingFill
                  $percentage={((fragrance.sillage ?? 0) / 10) * 100}
                />
              </S.RatingBar>
              <p>
                <span>Sillage</span>
              </p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <p>{fragrance.versatility}/10</p>
              <S.RatingBar>
                <S.RatingFill
                  $ratingFill="#96D149"
                  $percentage={((fragrance.versatility ?? 0) / 10) * 100}
                />
              </S.RatingBar>
              <p>
                <span>Versatility</span>
              </p>
            </S.ContentWrapper>
          </S.ProjectionAndSillageWrapper>
        </S.BottleLongevityWrapper>

        <S.AccordsAndLogoWrapper>
          {/* NO */}
          <AccordsDisplay
            accords={fragrance.accords}
            onAccordClick={handleAccordClick}
            selectedAccord={selectedAccord}
            highlightedAccords={highlightedAccords}
          />
          {fragrance.houseLogo && (
            <S.HouseLogoWrapper>
              <Link
                to={`/fragrance-reviews?tags=${encodeURIComponent(
                  fragrance.house
                )}`}
              >
                <S.HouseLogo
                  src={fragrance.houseLogo}
                  alt={`${fragrance.house} logo`}
                />
              </Link>
            </S.HouseLogoWrapper>
          )}

          <PerfumersDisplay perfumers={fragrance.perfumers} />
        </S.AccordsAndLogoWrapper>
        {/* NO */}
        <NotesDisplay
          notes={fragrance.notes}
          selectedAccord={selectedAccord}
          selectedNote={selectedNote}
          onNoteClick={handleNoteClick}
        />
      </S.HeroSection>
    </>
  );
};
