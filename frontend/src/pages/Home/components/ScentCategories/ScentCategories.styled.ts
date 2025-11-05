import styled from "styled-components";

export const CategoryCard = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.spacing.sm};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-radius: 0px;
  }

  &:hover > h3 {
    color: black;
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
