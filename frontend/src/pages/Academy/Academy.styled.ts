import styled from "styled-components";

export const AcademyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const AcademyCard = styled.div`
  background: ${(props) => props.theme.colors.background || "#f9f9f9"};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: ${(props) => props.theme.colors.primary || "#e99047"};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const AcademyTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: rgb(38, 50, 70);
  line-height: 1.4;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  transition: color 0.3s ease;

  ${AcademyCard}:hover & {
    color: #e99047;
  }
`;

export const AcademyAuthor = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textLight || "#666"};
  font-style: italic;
  margin-top: ${(props) => props.theme.spacing.xs};
`;
