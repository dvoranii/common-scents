import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};
  padding: 0 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ReviewCard = styled.div`
  opacity: 0;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  background-color: #fffbeb;
  border-radius: ${(props) => props.theme.spacing.sm};
  overflow: hidden;
  height: 100%;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.04),
    0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);

  &:hover {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.06),
      0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    translate: 0 -4px;
    scale: 1.02;
  }

  &.fade-in-delay-0 {
    animation: ${fadeInUp} 0.6s ease-out 0.1s forwards;
  }

  &.fade-in-delay-1 {
    animation: ${fadeInUp} 0.6s ease-out 0.3s forwards;
  }

  &.fade-in-delay-2 {
    animation: ${fadeInUp} 0.6s ease-out 0.5s forwards;
  }
`;

export const ReviewImageLink = styled(Link)`
  display: block;
  background: white;
  height: 360px;
  min-height: 360px;

  @media screen and (max-width: 768px) {
    height: 280px;
    min-height: 280px;
  }
`;

export const ReviewImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const BottleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 200ms ease;

  ${ReviewImageLink}:hover & {
    filter: brightness(1.05);
  }
`;

export const ReviewContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 0;
`;

export const ReviewTitle = styled.h3`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const ReviewDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
  flex: 1;
`;

export const ReviewTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ReviewLink = styled(Link)`
  display: block;
  background: none;
  cursor: pointer;
  margin-top: auto;
`;

export const ReviewLinkText = styled.span`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #b45309;
  }
`;
