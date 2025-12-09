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
`;

export const EventCard = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.spacing.md};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    filter: brightness(0.8);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
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

  p {
    margin: ${(props) => props.theme.spacing.xs} 0 0;
    font-size: ${(props) => props.theme.fontSizes.sm};
    opacity: 0.9;
    line-height: 1.4;
  }
`;

export const EventTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin: 0;
  color: white;
`;
