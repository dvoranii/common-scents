import styled from "styled-components";
import WhiteTextureBG from "/assets/images/white-texture-bg.jpg";
import type { Theme } from "./theme";

export const Section = styled.section<{
  $altBg?: boolean;
  $hasBgImg?: boolean;
  $paddingBottom?: string;
}>`
  padding: ${(props) =>
    `${props.theme.spacing.xxxl} ${props.theme.spacing.lg}`};
  ${(props) =>
    props.$paddingBottom && `padding-bottom: ${props.$paddingBottom};`};
  background-color: ${(props) =>
    props.$altBg ? props.theme.colors.backgroundAlt : "#fff"};

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

export const SectionContent = styled.div<{ $animate?: boolean }>`
  max-width: 1400px;
  margin: 0 auto;

  ${(props) =>
    props.$animate &&
    `opacity:0;
     transform: translateY(-8px);
     animation: fadeInSlideDown 400ms ease 1200ms forwards;
  `}

  @keyframes fadeInSlideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const SectionTitle = styled.h2<{
  $leftAligned?: boolean;
  $marginBottom?: string;
  $padding?: string;
  $color?: boolean;
  $animate?: boolean;
  as?: React.ElementType;
}>`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: ${(props) => (props.$leftAligned ? "left" : "center")};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : props.theme.spacing.xxl};
  font-weight: 600;
  padding: ${(props) => (props.$padding ? props.$padding : "0")};
  ${(props) => props.$color && `color: #263246;`}

  ${(props) =>
    props.$animate &&
    `
    opacity: 0;
    
    &.animate-in {
      animation: sectionTitleFadeIn 0.6s ease-out forwards;
    }
  `}

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }

  @keyframes sectionTitleFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface SectionSubtitleProps {
  $color?: string;
  $padding?: string;
  $leftAligned?: boolean;
  $fontWeight?: number;
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
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 600)};
  letter-spacing: 0.5px;
`;

export const MainTitle = styled.h1<{
  $center?: boolean;
  $color?: string;
  $bgColor?: string;
  $padding?: string;
}>`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: ${(props) => (props.$color ? props.$color : "rgb(38, 50, 70)")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  ${(props) => props.$bgColor && `background: ${props.$bgColor};`};
  padding: ${(props) => (props.$padding ? props.$padding : "10px 20px")};
  opacity: 0;
  animation: fadeInSlideDown 500ms ease 750ms forwards;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.xxxxl};
  }

  @keyframes fadeInSlideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
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

  opacity: 0;
  animation: fadeInSwipe 800ms ease 1000ms forwards;
  position: relative;

  @keyframes fadeInSwipe {
    0% {
      opacity: 0;
      transform: translateX(-15px);
    }
    60% {
      transform: translateX(2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const LogoContainer = styled.div<{ $animateInfinity?: boolean }>`
  display: flex;
  justify-content: center;

  img {
    width: 25vh;
    max-width: 250px;
    opacity: 0;
    animation: gentleReveal 900ms ease-out 150ms forwards;
    height: auto;
    ${(props) =>
      props.$animateInfinity &&
      `
        animation: gentleReveal 900ms ease-out 150ms forwards,
        lightbulbFlicker 3s ease-in-out 1.05s infinite;
      `}

    @keyframes gentleReveal {
      0% {
        transform: scale(0.5) translateY(10px);
        opacity: 0;
        filter: brightness(0.7) drop-shadow(0 0 0px rgba(255, 255, 220, 0));
      }
      50% {
        transform: scale(1) translateY(0);
        opacity: 1;
        filter: brightness(1) drop-shadow(0 0 3px rgba(255, 255, 220, 0.15));
      }
      65% {
        transform: scale(1.02) translateY(0);
        filter: brightness(1.25) drop-shadow(0 0 12px rgba(255, 255, 220, 0.4));
      }
      100% {
        transform: scale(1) translateY(0);
        opacity: 1;
        filter: brightness(1.05) drop-shadow(0 0 5px rgba(255, 255, 220, 0.2));
      }
    }

    @keyframes lightbulbFlicker {
      0%,
      100% {
        filter: brightness(1.05) drop-shadow(0 0 5px rgba(255, 255, 220, 0.2));
      }

      50% {
        filter: brightness(1.15) drop-shadow(0 0 8px rgba(255, 255, 220, 0.35));
      }
    }

    aspect-ratio: 153/205;
    background-color: transparent;
  }
`;

export const HeroSection = styled.section<{ $height?: boolean }>`
  position: relative;
  ${(props) => props.$height && `height: 100vh;`}
  padding: 0px 40px 20px 40px;
  text-align: center;
  overflow: hidden;

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    white
  );
`;

export const SpotlightCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HeroContent = styled.div<{ $padding?: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  ${(props) => props.$padding && `padding-top: ${props.theme.spacing.xxxxl};`};
`;

export const ButtonGroup = styled.div<{ $paddingTop?: string }>`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${(props) =>
    props.$paddingTop ? props.$paddingTop : props.theme.spacing.md};
`;

export const PrimaryButton = styled.button<{ $animate?: boolean }>`
  position: relative;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid transparent;
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

  ${(props) =>
    props.$animate &&
    `
    opacity: 0;
    animation: pureFadeIn 500ms ease 1500ms forwards;
    transform: none !important; 
  `}

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
    color: rgb(38, 50, 70);
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  @keyframes pureFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
