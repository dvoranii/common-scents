// VideoHover.styled.ts
import styled from "styled-components";

interface VisibilityProps {
  $visible: boolean;
}

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
`;

export const ThumbnailImage = styled.img<VisibilityProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "scale(1)" : "scale(1.02)")};
`;

export const HoverVideo = styled.video<VisibilityProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "scale(1)" : "scale(1.02)")};
`;
