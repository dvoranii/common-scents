import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScentCategoriesContainer = styled.div`
  .flickity-button {
    background: white;
    color: #333;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease;
    opacity: 0;
    transform: translateY(-50%) scale(0.8);
    z-index: 5;

    &:hover {
      background: #333;
      color: white;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);

      .flickity-button-icon {
        fill: white;
      }
    }

    &:disabled {
      opacity: 0 !important;
      cursor: default;
    }
  }

  &:hover .flickity-button {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }

  .flickity-prev-next-button.previous {
    left: -40px;
    top: 65%;
  }
  .flickity-prev-next-button.next {
    right: -40px;
    top: 65%;
  }

  .flickity-button-icon {
    width: 30%;
    left: 35%;
    top: 22.5%;
  }

  .flickity-page-dots {
    bottom: -30px;
    .dot {
      width: 8px;
      height: 8px;
      opacity: 0.2;
      background: #333;
      margin: 0 6px;
      transition: all 0.3s ease;
      border-radius: 4px;
      &.is-selected {
        opacity: 1;
        width: 24px;
      }
    }
  }
`;

export const CategoryCard = styled(Link)<{
  $bgColor?: string;
  $patternColor?: string;
}>`
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 5px;

  background: ${(props) =>
    props.$bgColor
      ? `linear-gradient(135deg, color-mix(in srgb, ${props.$bgColor}, transparent 20%), color-mix(in srgb, ${props.$bgColor}, transparent 10%))`
      : "#f5f5f5"};

  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.spacing.sm};

  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  will-change: transform;

  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  & > * {
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 0.6) 100%,
        rgba(255, 255, 255, 0)
      ),
      radial-gradient(
        ${(props) => props.$patternColor || "#ffffff"} 1.5px,
        transparent 1.5px
      );
    background-size: 100% 100%, 32px 32px;
    background-repeat: no-repeat, repeat;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: -150%;
    left: -150%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 60%
    );
    filter: blur(5px);
    transition: transform 0.6s ease-in-out;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::after {
    transform: translate(45%, 45%);
  }

  &:hover {
    filter: brightness(1.03) contrast(1.02);
  }
`;

interface CategoryIconColor {
  $color?: string;
}

export const CategoryIcon = styled.div<CategoryIconColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto ${(props) => props.theme.spacing.md} auto;

  color: white;
  background-color: color-mix(
    in srgb,
    ${(props) => props.$color},
    rgba(0, 0, 0, 1) 15%
  );

  width: fit-content;
  border-radius: 50%;
  padding: 8px;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.4);

  & > svg {
    display: block;
    padding: 4px;
  }
`;

export const CategoryName = styled.h3`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 200;
  letter-spacing: 0.5px;
  color: white;
  margin-top: 8px;
`;
