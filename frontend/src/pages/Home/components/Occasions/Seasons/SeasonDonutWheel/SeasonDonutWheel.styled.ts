import styled from "styled-components";

interface DonutWheelProps {
  $rotation: number;
}

export const DonutContainer = styled.div<DonutWheelProps>`
  width: 750px;
  height: 750px;
  margin-left: -20%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  transform: rotate(${(props) => props.$rotation + 45}deg);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;

  -webkit-mask-image: radial-gradient(
    circle,
    transparent 0%,
    transparent 20%,
    black 20%,
    black 100%
  );
  mask-image: radial-gradient(
    circle,
    transparent 0%,
    transparent 20%,
    black 20%,
    black 100%
  );

  @media screen and (max-width: 1024px) {
    width: 600px;
    height: 600px;
    margin-left: -35%;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 580px) {
    width: 420px;
    height: 420px;
    margin-left: -40%;
  }

  @media screen and (max-width: 475px) {
    margin-left: -65%;
  }

  @media screen and (max-width: 395px) {
    margin-left: -82%;
  }
`;

export const DonutSegment = styled.div<{
  $rotation: number;
  $isActive?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%);

  transform: rotate(${(props) => props.$rotation}deg);
  transform-origin: center;
  transition: filter 0.5s ease;

  ${(props) =>
    props.$isActive
      ? `
        filter: brightness(1.2) contrast(1.05) saturate(1.15);
        z-index: 2;
      `
      : `
        filter: brightness(0.75) saturate(0.8);
      `}
`;

export const SegmentBackground = styled.div<{
  $background: string;
  $segmentRotation: number;
}>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.$background};
  background-size: cover;
  background-position: center;

  transform: rotate(${(props) => -(props.$segmentRotation + 45)}deg);
  transform-origin: center;
`;
