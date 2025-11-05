import styled from "styled-components";
import { Link } from "react-router-dom";

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
  max-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fffbeb;
  border-radius: ${(props) => props.theme.spacing.sm};
  overflow: hidden;
  transition: box-shadow 0.3s;
  border: 1px solid grey;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const ReviewImage = styled.div`
  flex: 1;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  flex: 0.6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 912px) {
    flex: 1;
  }
  @media screen and (max-width: 768px) {
    flex: 0.7;
  }
`;

export const ReviewTitle = styled.h3`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
`;

export const ReviewDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const ReviewTextWrapper = styled.div``;

export const ReviewLink = styled(Link)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  background: none;
  transition: color 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #b45309;
  }
`;

export const BottleImage = styled.img`
  height: 100%;
  object-fit: contain;
`;
