import styled from "styled-components";
import WhiteBG from "/assets/images/white-texture-bg-2.jpg";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

interface CategoryHeaderProps {
  $bgColor: string;
}

export const CategoryHeader = styled.div<CategoryHeaderProps>`
  background: ${(props) => props.$bgColor};
  padding: ${(props) => props.theme.spacing.xxxl};
  ${(props) => props.theme.spacing.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 400px;
  }
`;

export const CategoryBodyWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.xxxl} 40px;
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.5)
    ),
    url(${WhiteBG});
  background-size: cover;
  background-repeat: no-repeat;
`;

interface CategoryIconProps {
  $color?: string;
}

export const CategoryIcon = styled.div<CategoryIconProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.$color || "darkbrown"};
`;

export const CategoryName = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const CategoryDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;
  margin: ${(props) => props.theme.spacing.xxl} auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

export const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading2};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const FragranceListPlaceholder = styled.section`
  margin-top: ${(props) => props.theme.spacing.xxxl};
  padding: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.spacing.md};
  min-height: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const CategorySubtitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 400;
  margin-top: ${(props) => props.theme.spacing.md};
  margin-bottom: 0;
`;

export const ImgAndDescriptionWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const CategoryImg = styled.img`
  object-fit: contain;
  aspect-ratio: 6/4;

  @media screen and (max-width: 900px) {
    min-width: auto;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  margin: 0 auto ${(props) => props.theme.spacing.xxl};
`;

export const NoteProfilesSection = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.xxl};
`;

export const NoteProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2.4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const NoteProfileCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.md};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: white;
  padding: 2.4rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 3.4rem;
  }
`;

export const NoteProfileTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: #444444;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: center;
`;

export const NoteProfileDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;
`;

export const ExampleNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.md};

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const ExampleImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  background: #eee;
  border-radius: 8px;
  transition: transform 0.2s ease;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1) translateZ(8px);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const CharactersticsAndBestForSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CharacteristicsSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
  border-right: 1px solid grey;
  padding: 0 20px;
`;

export const BestForSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
  padding: 0.75rem;
`;

export const CharacteristicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const adjustColor = (color: string, percent: number) => {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0xff) + percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

export const CharacteristicChip = styled.span<{ $bgColour?: string }>`
  position: relative;
  display: inline-block;
  background: ${(props) => {
    const baseColor = props.$bgColour || "#332421";
    const lightColor = adjustColor(baseColor, 30);
    const darkColor = adjustColor(baseColor, -30);
    return `linear-gradient(180deg, ${lightColor} 0%, ${baseColor} 50%, ${darkColor} 100%)`;
  }};
  color: white;
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }
`;
