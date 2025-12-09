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

  /* Create the donut hole using a radial mask */
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
    margin-left: -40%;
  }

  @media screen and (max-width: 680px) {
    width: 500px;
    height: 500px;
    margin-left: -50%;
  }

  @media screen and (max-width: 540px) {
    width: 420px;
    height: 420px;
    margin-left: -55%;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 375px) {
    margin-left: -65%;
  }
`;

export const DonutSegment = styled.div<{
  $rotation: number;
  $background: string;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%);
  transform: rotate(${(props) => props.$rotation}deg);
  transform-origin: center;
`;

export const SegmentBackground = styled.div<{
  $background: string;
  $segmentRotation: number;
  $containerRotation: number;
}>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.$background};
  background-size: cover;
  background-position: center;

  /* Pre-rotate backgrounds so they're always upright, not reactive to container rotation */
  transform: rotate(${(props) => -(props.$segmentRotation + 45)}deg);
  transform-origin: center;
`;

export const InnerCircle = styled.div`
  /* No longer needed - the mask creates the hole */
  display: none;
  position: relative;
`;
