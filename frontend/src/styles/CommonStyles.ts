import styled from "styled-components";
import WhiteTextureBG from "../assets/white-texture-bg.jpg";
import type { Theme } from "./theme";

export const Section = styled.section<{ altBg?: boolean; $hasBgImg?: boolean }>`
  padding: ${(props) =>
    `${props.theme.spacing.xxxl}  ${props.theme.spacing.lg}`};
  background-color: ${(props) =>
    props.altBg ? props.theme.colors.backgroundAlt : "#fff"};

  ${(props) =>
    props.$hasBgImg &&
    `
    background: 
      linear-gradient(
        rgba(255, 255, 255, 1),  
        rgba(255, 255, 255, 0.65)   
      ),
      url(${WhiteTextureBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2<{
  $leftAligned?: boolean;
  $marginBottom?: string;
  $padding?: string;
}>`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: ${(props) => (props.$leftAligned ? "left" : "center")};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : props.theme.spacing.xxl};
  font-weight: 600;
  padding: ${(props) => (props.$padding ? props.$padding : "0")};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    margin-bottom: 0.4rem;
  }
`;

interface SectionSubtitleProps {
  $color?: string;
  $padding?: string;
  $leftAligned?: boolean;
}
export const SectionSubtitle = styled.h3<SectionSubtitleProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  text-align: ${(props) => (props.$leftAligned ? "left" : "center")};
  color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.textLight};
  margin-top: -${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  line-height: 1.4;
  padding: ${(props) => (props.$padding ? props.$padding : "0")};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const MainTitle = styled.h1<{ $center?: boolean; $color?: string }>`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.$color ? props.$color : "rgb(38, 50, 70)")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxxl};
  }
`;

export const TitleContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

interface TaglineProps {
  $capitalized?: boolean;
  $fontSize?: keyof Theme["fontSizes"];
  $color?: string;
  $letterSpacing?: string;
}
export const Tagline = styled.p<TaglineProps>`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) =>
    props.$fontSize
      ? props.theme.fontSizes[props.$fontSize]
      : props.theme.fontSizes.xl};
  letter-spacing: ${(props) =>
    props.$letterSpacing ? props.$letterSpacing : "1px"};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.$color};

  ${(props) => props.$capitalized && `text-transform: uppercase;`}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 25vh;
    max-width: 250px;
  }
`;

export const HeroSection = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding: 0px 40px 20px 40px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    white
  );
`;

export const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.xxxxl};
`;

export const ButtonGroup = styled.div<{ $paddingTop?: string }>`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${(props) =>
    props.$paddingTop ? props.$paddingTop : props.theme.spacing.md};
`;

export const PrimaryButton = styled.button`
  position: relative;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid #e78732;
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: 16px 32px;
  height: fit-content;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #efad70, #e88e44);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;
