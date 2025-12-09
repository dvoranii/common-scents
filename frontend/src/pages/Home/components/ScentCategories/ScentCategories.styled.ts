import styled from "styled-components";

export const CategoryCard = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.spacing.sm};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 0%;
    left: 0;
    bottom: 0px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.25);
    transition: all 300ms ease;
    z-index: -1;
  }
  &::before {
    position: absolute;
    content: "";
    width: 0%;
    right: 0;
    top: 0px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.25);
    transition: all 300ms ease;
    z-index: -1;
  }

  &:hover {
    border-radius: 0px;
    transform: translateZ(0);
  }

  &:hover::after {
    width: 100%;
    animation: swipeUp;
    animation-delay: 250ms;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  &:hover::before {
    width: 100%;
    animation: swipeDown;
    animation-delay: 250ms;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  &:hover > h3 {
    color: black;
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
      height: 50%;
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
