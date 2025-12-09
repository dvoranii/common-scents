import styled from "styled-components";
import { Link } from "react-router-dom";

interface SeasonsSectionProps {
  $backgroundColor: string;
  $backgroundImg?: string;
}

const hexToRgba = (hex: string, alpha: number): string => {
  const cleanHex = hex.replace(/^#/, "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SeasonsSection = styled.section<SeasonsSectionProps>`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.$backgroundColor};

  ${(props) => {
    if (!props.$backgroundImg) return "background-image: none;";

    const solidColor = hexToRgba(props.$backgroundColor, 0.95);
    const transparentColor = hexToRgba(props.$backgroundColor, 0.1);

    return `
      background-image: 
        linear-gradient(
          to bottom, 
          ${transparentColor},
          ${solidColor} 50%,   
          ${solidColor}       
        ),
        url(${props.$backgroundImg});
    `;
  }}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: background-color 0.5s ease;
`;

export const SeasonsSubtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: white;
  text-align: center;
  margin: 0 0 ${(props) => props.theme.spacing.xl};
  font-weight: 600;
`;

export const SeasonsContent = styled.div`
  margin: 0 auto;
  height: 585px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.xxl};

  @media screen and (max-width: 1024px) {
    height: 450px;
  }

  @media screen and (max-width: 540px) {
    height: 350px;
    gap: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    height: 300px;
    gap: 1.2rem;
  }
`;

export const WheelContainer = styled.div`
  margin-left: -15%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    flex: 0 0 300px;
    height: 300px;
  }
`;

export const WheelWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.1); */
`;

interface WheelImageProps {
  $rotation: number;
}

export const WheelImage = styled.img<WheelImageProps>`
  height: 843px;
  object-fit: contain;
  transform: rotate(${(props) => props.$rotation}deg);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SeasonInfo = styled.div`
  flex: 1;
  color: white;
  position: relative;
  padding-right: 20px;
`;

export const SeasonTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SeasonEmoji = styled.span`
  font-size: 32px;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SeasonTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  margin-bottom: 0.4rem;
  font-weight: 700;
  animation: fadeIn 0.5s ease-in;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.25);
  letter-spacing: 1px !important;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SeasonDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 1.25;
  opacity: 0.95;
  animation: fadeIn 0.5s ease-in 0.1s backwards;
  width: 75%;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.2rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 0.95;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    line-height: 1.2;
  }
`;

export const NavigationControls = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.025);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SeeMoreLink = styled(Link)`
  display: block;
  position: relative;
  width: fit-content;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  letter-spacing: 1px;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.25);

  animation: fadeIn 0.5s ease-in;
  transition: all 200ms ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: width 300ms ease-out;
    box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    text-shadow: -1px 1px 2px rgba(255, 255, 255, 0.5);

    &::after {
      box-shadow: -1px 1px 2px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
