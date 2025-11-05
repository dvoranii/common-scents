import styled from "styled-components";

export const NotesColumn = styled.div`
  flex: 1;
  min-width: 33%;
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-width: 100%;
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const NotesSectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const NoteType = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: #334155;
  margin: ${(props) => props.theme.spacing.lg} 0
    ${(props) => props.theme.spacing.md} 0;
  padding-bottom: ${(props) => props.theme.spacing.sm};
  border-bottom: 1px solid #e2e8f0;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const NotesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: ${(props) => props.theme.spacing.md};
    justify-content: center;
  }
`;

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  transition: transform 0.2s ease;
`;

export const NoteImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  margin-top: ${(props) => props.theme.spacing.sm};
  color: #475569;
  text-align: center;
  max-width: 80px;
  line-height: 1.3;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;
