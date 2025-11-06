import styled from "styled-components";

export const AccordsColumn = styled.div`
  min-width: 250px;
  max-width: 620px;
  border-radius: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: left;

  @media (max-width: 1100px) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    margin-bottom: ${(props) => props.theme.spacing.md};
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  } */
`;
