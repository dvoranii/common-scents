import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl};
`;

export const FragranceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(280px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.xl};

  & > * {
    max-width: 320px;
  }

  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }

  @media (max-width: 900px) {
    max-width: 670px;
    margin: 0 auto;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    gap: 2.4rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(280px, 1fr);
  }
`;

export const ThumbnailCard = styled(Link)`
  width: 100%;
  display: block;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;
export const NameAndHouseWrapper = styled.div``;
export const ThumbnailContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  background: linear-gradient(to bottom, #fff, #eee);
  border-top: 1px solid #eee;
  min-height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FragranceHouse = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const FragranceName = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const FragranceGender = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #9ca3af;
  margin-bottom: 8px;
`;

export const ThumbnailNotes = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #6b7280;
  line-height: 1.4;
`;
