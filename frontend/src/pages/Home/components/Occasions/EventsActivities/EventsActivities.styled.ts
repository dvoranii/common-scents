import styled from "styled-components";

export const EventsSubtitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: #263246;
  margin: 0 0 ${(props) => props.theme.spacing.xl};
  font-weight: 600;
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  grid-auto-rows: 300px;
  & > [data-tilt="true"] {
    height: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    border-radius: ${(props) => props.theme.spacing.md} !important;
    transform-style: preserve-3d;
  }
`;

export const EventCard = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.spacing.md};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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
    border-radius: ${(props) => props.theme.spacing.md};
    border: 2px solid transparent;
    transition: border-color 0.4s ease;
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;

  ${EventCard}:hover & {
    transform: translateZ(30px) scale(1.05);
  }
`;

export const EventOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    transparent 100%
  );
  padding: ${(props) => props.theme.spacing.xl};
  color: white;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${EventCard}:hover & {
    transform: translateZ(50px);
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      transparent 100%
    );
  }

  p {
    margin: ${(props) => props.theme.spacing.xs} 0 0;
    font-size: ${(props) => props.theme.fontSizes.sm};
    opacity: 0.9;
    line-height: 1.4;
    transition: all 0.3s ease;
    transform: translateY(10px);

    ${EventCard}:hover & {
      opacity: 1;
      transform: translateY(0);
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

  ${EventCard}:hover & {
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;
