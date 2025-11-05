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
  HeaderCol1,
  HeaderCol2,
  BrandWrapper,
} from "./FragranceHeader.styled";
import RatingStars from "./RatingStars/RatingStars";
import { NotesDisplay } from "./NoteDisplay/NoteDisplay";

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
        <HeaderCol1>
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
        </HeaderCol1>
        <HeaderCol2>
          {fragrance.houseLogo && (
            <HouseLogoWrapper>
              <HouseLogo src={fragrance.houseLogo} />
            </HouseLogoWrapper>
          )}
        </HeaderCol2>
      </HeaderWrapper>

      <HeroSection>
        <BottleImage
          src={fragrance.heroImage}
          alt={`${fragrance.name} bottle`}
          $size={bottleImageSize}
        />

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
