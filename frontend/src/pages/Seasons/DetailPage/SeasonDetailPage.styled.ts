import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeroImageContainer = styled.div<{
  $bgImg: string;
  $overlayOpacity?: number;
}>`
  width: 100%;
  height: 700px;
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -100px;
  position: relative;
  z-index: 1;
  background-attachment: fixed;

  ${(props) =>
    props.$overlayOpacity &&
    props.$overlayOpacity > 0 &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, ${props.$overlayOpacity});
      z-index: 1;
    }
  `}

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 500px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 400px;
    background-position: 0 -120px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 400px;
    background-position: 0 -180px;
    padding: 0 20px;
  }
`;

export const HeroImageContainerInner = styled.div`
  max-width: 1200px;
  z-index: 999;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SeasonSubtitle = styled.h2<{
  $color?: string;
  $bgColor?: string;
  $width?: string;
}>`
  text-align: center;
  color: ${(props) => props.$color || props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 400;
  font-family: "Lato";
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

export const SettingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  padding: 0 60px;
  grid-template-columns: repeat(3, 1fr);
  transition: all 200ms ease;

  & > [data-tilt="true"] {
    height: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: ${(props) => props.theme.spacing.md} !important;
    transform-style: preserve-3d;
    overflow: visible !important;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  }
`;

export const SettingCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.lg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
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
    border-radius: ${(props) => props.theme.spacing.md};
    border: 2px solid transparent;
    transition: border-color 0.4s ease;
    z-index: 1;
    pointer-events: none;
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
  transition: all 200ms ease;

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
  transition: all 200ms ease;

  ${SettingCard}:hover & {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateZ(30px) translateY(-2px);
  }
`;

export const SettingImage = styled.img`
  width: 100%;
  transition: all 200ms ease;
  transform-style: preserve-3d;
  overflow: visible;

  ${SettingCard}:hover & {
    transform: translateZ(30px) scale(1.05);
    filter: contrast(1.1) brightness(1.05);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
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
  transition: all 200ms ease;
  color: rgb(38, 50, 70);
  text-transform: uppercase;
  letter-spacing: 0.5px;

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
