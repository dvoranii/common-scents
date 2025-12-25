import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.main`
  background-color: ${(props) => props.theme.colors.background};
`;

/* --- HERO SECTION --- */

export const HeroHeader = styled.header`
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  /* Optimization: Creates a stacking context */
  isolation: isolate;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 500px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

export const HeroBgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;

  /* Creates the fixed/parallax feel without the mobile bugs */
  /* If you want pure fixed: position: fixed; and adjust header accordingly */
`;

export const HeroOverlay = styled.div<{ $opacity?: number }>`
  position: absolute;
  inset: 0;
  background: black;
  opacity: ${(props) => props.$opacity || 0};
  z-index: -1;
  pointer-events: none;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const SeasonSubtitle = styled.h2<{
  $color?: string;
  $bgColor?: string;
}>`
  text-align: center;
  color: ${(props) => props.$color || props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 400;
  font-family: "Lato", sans-serif;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  letter-spacing: 2px;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  padding: 8px 16px;
  background: ${(props) => (props.$bgColor ? props.$bgColor : "none")};
  width: fit-content;
  margin: 0 auto;

  opacity: 0;
  animation: fadeInSlideDown 500ms ease 950ms forwards;

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

export const Uppercase = styled.span`
  text-transform: uppercase;
`;

/* --- CONTENT SECTION --- */

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${(props) => props.theme.spacing.xxl};
  padding: ${(props) => props.theme.spacing.xxl} 20px 0 20px;
`;

export const SettingsSection = styled.section`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
`;

export const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: center;
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.xl};
  font-weight: 600;
`;

/* Semantic UL for Grid */
export const SettingGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  padding: 0 60px;
  list-style: none;
  margin: 0;
  isolation: isolate;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  }
`;

export const GridItem = styled.li`
  display: block;
  height: 100%;
`;

export const SettingCard = styled.article`
  padding: ${(props) => props.theme.spacing.lg};
  /* Tilt handles structural styles (borderRadius, etc) via inline styles now */
  /* We just handle internal spacing and visuals here */

  height: 100%;
  overflow: visible;
  position: relative;

  /* Visuals */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Border effect */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${(props) => props.theme.spacing.md};
    border: 2px solid transparent;
    transition: border-color 0.4s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::before {
    border-color: rgba(233, 144, 71, 0.4);
  }

  @media screen and (max-width: 540px) {
    padding: ${(props) => props.theme.spacing.xl};
  }
`;

export const SettingTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  transition: transform 200ms ease, text-shadow 200ms ease;
  will-change: transform;

  ${SettingCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
`;

export const SettingDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
  transition: transform 200ms ease;
  will-change: transform;

  ${SettingCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
`;

export const SettingImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 200ms ease, filter 200ms ease;
  transform-style: preserve-3d;
  will-change: transform;

  ${SettingCard}:hover & {
    transform: translateZ(30px) scale(1.05);
    filter: contrast(1.1) brightness(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const FragranceListPlaceholder = styled.section`
  margin-top: ${(props) => props.theme.spacing.xxxl};
  padding: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.spacing.md};
  min-height: 200px;
`;

export const SeeEventsLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2.4rem auto;
  position: relative;
  width: fit-content;
  transition: color 200ms ease;
  color: rgb(38, 50, 70);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transition: width 300ms ease-out;
    box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    color: #e88e44;
  }
`;
