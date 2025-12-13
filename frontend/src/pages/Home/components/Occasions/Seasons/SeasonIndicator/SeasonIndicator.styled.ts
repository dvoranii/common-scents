import styled from "styled-components";

interface IconProps {
  $isActive: boolean;
}

export const IndicatorContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 150px;
  height: 150px;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    width: 60px;
    height: 60px;
    top: 15px;
    right: 15px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CrossDivider = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.4;
`;

export const SeasonIcon = styled.img<IconProps>`
  position: absolute;
  width: 65px;
  height: 65px;
  object-fit: contain;
  opacity: ${(props) => (props.$isActive ? 1 : 0.3)};
  filter: ${(props) => (props.$isActive ? "none" : "grayscale(100%)")};
  transition: all 0.3s ease;

  @media screen and (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }

  @media screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const WinterIcon = styled(SeasonIcon)`
  top: 0;
  left: 0;
`;

export const AutumnIcon = styled(SeasonIcon)`
  top: 0;
  right: 0;
`;

export const SummerIcon = styled(SeasonIcon)`
  bottom: 0;
  right: 0;
`;

export const SpringIcon = styled(SeasonIcon)`
  bottom: 0;
  left: 0;
`;
