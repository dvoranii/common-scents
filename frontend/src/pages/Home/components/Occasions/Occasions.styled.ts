import styled from "styled-components";
import WhiteTextureBG from "/assets/images/white-bg-3.webp";

export const OccasionsWrapper = styled.div`
  width: 100%;
  position: relative;
  isolation: isolate;
`;

export const EventsWrapper = styled.section`
  width: 100%;
  position: relative;

  --opacity-level: 0;
  --bg-rgb: 0, 0, 0;

  background-color: rgb(var(--bg-rgb));

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.65)
      ),
      url(${WhiteTextureBG});

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    opacity: var(--opacity-level);

    z-index: 0;
    pointer-events: none;

    will-change: opacity;
  }

  & > * {
    position: relative;
    z-index: 1;
    filter: brightness(calc(0.5 + (var(--opacity-level) * 0.5)));
  }
`;

export const OccasionsTitleWrapper = styled.div<{ $backgroundColor?: string }>`
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
  letter-spacing: 0.5px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    margin-bottom: 0.4rem;
  }
`;
