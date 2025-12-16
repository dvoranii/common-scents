import styled from "styled-components";

export const ScentCategoriesContainer = styled.div`
  .flickity-button {
    background: white;
    color: #333;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: opacity 0.3s ease, transform 0.3s ease;

    opacity: 0;
    transform: translateY(-50%) scale(0.8);

    &:hover {
      background: #333;
      color: white;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
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
    left: -10px;
    top: 80%;
  }
  .flickity-prev-next-button.next {
    right: -10px;
    top: 80%;
  }

  .flickity-button:hover .flickity-button-icon {
    fill: white;
  }

  .flickity-button-icon {
    width: 30%;
    left: 35%;
    top: 22.5%;
  }

  .flickity-page-dots {
    bottom: -30px;
    gap: 0;

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

export const CategoryCard = styled.div<{
  bgColor: string;
  $iconPattern: string;
}>`
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.spacing.sm};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin: 5px;

  & > * {
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: 0.06;

    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.25)
      ),
      ${(props) => props.$iconPattern};

    background-size: auto, 32px 32px;
    background-repeat: repeat;
    background-position: center;

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
    transform: rotate(0deg);
    transition: all 0.6s ease-in-out;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::after {
    transform: translate(45%, 45%);
  }

  &:hover {
    filter: brightness(1.03) contrast(1.02);
  }

  @keyframes swipeDown {
    from {
      height: 0%;
    }
    to {
      height: 50%;
    }
  }
  @keyframes swipeUp {
    from {
      height: 0%;
    }
    to {
      height: 100%;
    }
  }
`;

interface CategoryIconColor {
  $color?: string;
}

export const CategoryIcon = styled.div<CategoryIconColor>`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.$color || "darkbrown"};
`;

export const CategoryName = styled.h3`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease;
`;
