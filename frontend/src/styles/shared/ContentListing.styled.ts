import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentCard = styled(Link)`
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: ${(props) => props.theme.colors.background || "#f9f9f9"};
    border-color: ${(props) => props.theme.colors.primary || "#e99047"};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  border-right: 1px solid lightgrey;
  padding: 12px;
`;

export const ContentTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: rgb(38, 50, 70);
  line-height: 1.4;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  transition: color 0.3s ease;

  ${ContentCard}:hover & {
    color: #e99047;
  }
`;

export const ContentDescription = styled.p`
  width: 80%;
`;

export const DateTimeWrapper = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
`;

export const DateTimeText = styled.p`
  font-style: italic;
  color: #333333;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
