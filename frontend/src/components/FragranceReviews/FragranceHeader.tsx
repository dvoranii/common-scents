import type { Fragrance } from "../../types/fragrance.types";
import {
  HeaderWrapper,
  BrandName,
  FragranceName,
  MetadataItem,
  HeroSection,
  BottleImage,
  // StatsGrid,
  // StatCard,
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

interface Props {
  fragrance: Fragrance;
  bottleImageSize?: "small" | "medium" | "large" | "xlarge";
}

export const FragranceHeader: React.FC<Props> = ({
  fragrance,
  bottleImageSize = "medium",
}) => {
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
          <AccordsDisplay accords={fragrance.accords} />
          {fragrance.houseLogo && (
            <HouseLogoWrapper>
              <HouseLogo src={fragrance.houseLogo} />
            </HouseLogoWrapper>
          )}
        </AccordsAndLogoWrapper>

        <NotesDisplay notes={fragrance.notes} />

        {/* <StatsGrid>
          <StatCard>
            <h4>Longevity</h4>
            <p>{fragrance.longevity}/10</p>
          </StatCard>
          <StatCard>
            <h4>Projection</h4>
            <p>{fragrance.projection}/10</p>
          </StatCard>
          <StatCard>
            <h4>Season</h4>
            <p>{fragrance.season?.join(", ")}</p>
          </StatCard>
          <StatCard>
            <h4>Type</h4>
            <p>{fragrance.type?.join(", ")}</p>
          </StatCard>
        </StatsGrid> */}
      </HeroSection>
    </>
  );
};
