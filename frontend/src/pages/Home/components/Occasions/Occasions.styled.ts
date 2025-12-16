import styled from "styled-components";
import WhiteTextureBG from "/assets/images/white-bg-3.png";

export const OccasionsWrapper = styled.div`
  width: 100%;
`;

export const EventsWrapper = styled.div<{
  $brightness: number;
  $bgColor: string;
}>`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.65)
      ),
      url(${WhiteTextureBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${(props) => props.$brightness};
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  background-color: ${(props) => props.$bgColor};
  transition: background-color 0.3s ease;

  & > * {
    position: relative;
    z-index: 1;
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
