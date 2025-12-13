import styled from "styled-components";

export const OccasionsWrapper = styled.div`
  width: 100%;
`;

export const EventsWrapper = styled.div<{
  $brightness: number;
  $bgColor: string;
}>`
  width: 100%;
  padding: ${(props) => `${props.theme.spacing.xl}  ${props.theme.spacing.lg}`};
  background-color: ${(props) => props.$bgColor};
  transition: background-color 0.3s ease;

  & > * {
    filter: brightness(${(props) => props.$brightness});
    transition: filter 0.3s ease;
  }
`;

export const OccasionsTitleWrapper = styled.div<{
  $backgroundColor?: string;
}>`
  background: ${(props) => props.$backgroundColor || "transparent"};
  border-bottom: 2px solid white;
  padding: 1.2rem 0 1.2rem 1.2rem;
`;
export const OccasionsSectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: left;
  margin-bottom: 0;
  font-weight: 600;
  color: #ffffff;

  text-shadow: -1px 1px 4px rgba(0, 0, 0, 0.25);
  letter-spacing: 0cap.5;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    margin-bottom: 0.4rem;
  }
`;
