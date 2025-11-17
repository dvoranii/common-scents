import styled from "styled-components";

export const AccordsColumn = styled.div`
  min-width: 250px;
  max-width: 620px;
  border-radius: 20px;

  @media screen and (max-width: 560px) {
    min-width: 80%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: left;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export const AccordsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordItem = styled.div<{
  $width: string;
  $background: string;
  $color: string;
  $isSelected?: boolean;
  $isHighlighted?: boolean;
  $clickable?: boolean;
}>`
  padding: 0.375rem 0.75rem;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: ${(props) => props.$width};
  background: ${(props) => props.$background};
  color: ${(props) => props.$color};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  ${(props) =>
    props.$clickable &&
    `
    cursor: pointer;
    &:hover {
      transform: translateX(4px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
  `}

  ${(props) =>
    props.$isSelected &&
    `
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-weight: 900;
    z-index: 99;
    transform: translateX(4px);
    filter: brightness(1.05);
  `}
  
  ${(props) =>
    props.$isHighlighted &&
    !props.$isSelected &&
    `
    box-shadow: 0 0 0 1px black, 0 2px 6px rgba(0, 0, 0, 0.15);
    z-index: 99;
    font-weight: 900;
    transform: translateX(4px);
    filter: brightness(1.05);

  `}
`;
