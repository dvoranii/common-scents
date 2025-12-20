import styled from "styled-components";
import WhiteBG from "/assets/images/white-texture-bg-2.jpg";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

interface CategoryHeaderProps {
  $bgColor: string;
  $iconPattern: string;
}

export const CategoryHeader = styled.div<CategoryHeaderProps>`
  position: relative;
  background: ${(props) => props.$bgColor};
  overflow: hidden;

  padding: ${(props) => props.theme.spacing.xxxl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: 0.15;

    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.6) 100%,
        rgba(255, 255, 255, 0)
      ),
      ${(props) => props.$iconPattern};
    background-size: 100% 100%, 80px 80px;
    background-repeat: no-repeat, repeat;
    background-position: center, center;
    background-attachment: scroll, fixed;

    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 50%,
      rgba(0, 0, 0, 0.1)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(255, 255, 255, 0.5);
  }

  & > * {
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 500px;
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
  $bgColor?: string;
}

export const CategoryIcon = styled.div<CategoryIconProps>`
  display: flex;
  justify-content: center;
  color: white;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.8));
  background: ${(props) =>
    props.$bgColor
      ? `linear-gradient(
        ${props.$bgColor}, 
        color-mix(in srgb, ${props.$bgColor}, white 20%)
      )`
      : "#000"};
  padding: 20px;
  border-radius: 50%;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5);

  & > svg {
    padding: 8px;
  }
`;

export const CategoryName = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  color: ${(props) => props.theme.colors.text};
  margin-top: 1.2rem;
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
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: clamp(1.775rem, 5vw, 2.4rem);
  text-align: center;
  color: rgb(38, 50, 70);
  opacity: 0.95;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: ${(props) => props.theme.spacing.xl};
  width: fit-content;
  display: flex;
  justify-self: center;
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
  color: #333;
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 400;
  margin-top: ${(props) => props.theme.spacing.sm};
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

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding-top: 12.4rem;
  }
`;

export const NoteProfileGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  transition: all 200ms ease;

  & > [data-tilt="true"] {
    height: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: ${(props) => props.theme.spacing.sm} !important;
    transform-style: preserve-3d;
    overflow: visible !important;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2.4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const NoteProfileCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.sm};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  background: white;
  overflow: visible;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${(props) => props.theme.spacing.sm};
    border: 2px solid transparent;
    transition: border-color 0.4s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    border-color: rgba(233, 144, 71, 0.4);
  }

  @media screen and (max-width: 900px) {
    padding: 2.4rem 1.2rem;
  }
`;

export const NoteProfileTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: #444444;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: center;

  transition: all 200ms ease;

  ${NoteProfileCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
`;

export const NoteProfileDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;
  transition: all 200ms ease;
  ${NoteProfileCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
`;

export const ExampleNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.md};
  transition: all 200ms ease;
  ${NoteProfileCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
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
    box-shadow: 0px 0px 6px rgba(233, 144, 71, 0.54);
  }
`;

export const CharactersticsAndBestForSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding-top: 2.4rem;
  }
`;

export const CharacteristicsSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
  padding: 0 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      lightgrey 20%,
      lightgrey 80%,
      transparent
    );

    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    border-right: none;
    padding: 0;

    &::after {
      display: none;
    }
  }
`;

export const BestForSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
  padding: 0 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0;
    margin-top: 0;
  }
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
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 200;
  letter-spacing: 0.5px;
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
