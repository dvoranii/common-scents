import styled from "styled-components";
import { Link } from "react-router-dom";

export const GuidesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xxl};
  position: relative;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: ${(props) => props.theme.colors.border};
      transform: translateX(-50%);
    }
  }
`;

export const DualSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  background: #eee;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  padding-top: ${(props) => props.theme.spacing.sm};
`;

export const GuidesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  list-style: none;
  padding: 0;

  min-height: 588px;
  content-visibility: auto;
  contain-intrinsic-size: 588px;
`;

export const GuideItem = styled.li`
  padding-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  opacity: 0;
  transform: translateY(-8px);
  will-change: transform, opacity;

  contain: layout;

  &.fade-in-delay-0 {
    animation: fadeInDown 0.6s ease-out 0.2s forwards;
  }
  &.fade-in-delay-1 {
    animation: fadeInDown 0.6s ease-out 0.4s forwards;
  }
  &.fade-in-delay-2 {
    animation: fadeInDown 0.6s ease-out 0.6s forwards;
  }
  &.fade-in-delay-3 {
    animation: fadeInDown 0.6s ease-out 0.8s forwards;
  }

  @keyframes fadeInDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const GuideLink = styled(Link)`
  text-decoration: none;
  display: block;

  transition: transform 0.2s ease;
  &:hover {
    transform: translateX(4px);
  }
`;

export const GuideTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #888888;
  }
`;

export const GuideMeta = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textLight};
`;
