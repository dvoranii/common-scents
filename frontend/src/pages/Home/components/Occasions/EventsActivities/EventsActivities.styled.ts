import styled from "styled-components";

export const EventsWrapperInner = styled.div`
  padding: ${(props) =>
    `${props.theme.spacing.xxxxl}  ${props.theme.spacing.lg}`};
`;

export const EventsSubtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  color: #263246;
  margin: 0 0 ${(props) => props.theme.spacing.lg};
  font-weight: 600;
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  grid-auto-rows: 300px;
  border-radius: 20px;

  & > [data-tilt="true"] {
    height: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background: transparent;
    transform-style: preserve-3d;
    border-radius: 20px !important;
  }
`;

export const EventCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  border-radius: 20px;
  overflow: hidden;
  filter: brightness(0.8);

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

export const EventOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  padding: ${(props) => props.theme.spacing.xl};
  color: white;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
  pointer-events: none;

  p {
    margin: ${(props) => props.theme.spacing.xs} 0 0;
    font-size: ${(props) => props.theme.fontSizes.sm};
    opacity: 0.9;
    line-height: 1;
    transition: all 0.3s ease;
    transform: translateY(10px);

    ${EventCard}:hover & {
      opacity: 1;
      transform: translateY(12px) translateZ(50px) scale(1.15) translateX(20px);
      text-shadow: -1px 1px 2px rgba(0, 0, 0, 1);
    }
  }

  @media screen and (max-width: 1024px) {
    bottom: 25px;
    left: 15px;

    p {
      margin-top: 0;
    }
  }
`;

export const EventTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin: 0;
  color: white;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1;

  ${EventCard}:hover & {
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 1);
    transform: translateY(-2px) translateZ(50px) scale(1.15) translateX(20px);
  }
`;
