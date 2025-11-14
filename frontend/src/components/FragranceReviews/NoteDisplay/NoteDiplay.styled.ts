import styled from "styled-components";

export const NotesColumn = styled.div`
  flex: 1;
  border-radius: 20px;

  @media screen and (max-width: 940px) {
    grid-column: span 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${(props) => props.theme.spacing.xxl};
  }
`;

export const NotesSectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: left;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    text-align: center;
  }
`;

export const NoteType = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: #334155;
  padding-bottom: ${(props) => props.theme.spacing.sm};
  border-bottom: 1px solid #e2e8f0;
  text-align: left;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const NotesGrid = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.md};

  @media screen and (max-width: 940px) {
    flex-wrap: wrap;
  }
`;

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  transition: transform 0.2s ease;
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const NoteImage = styled.img`
  width: clamp(2rem, 6vw, 4rem);
  height: auto;
  object-fit: cover;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease;
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  margin-top: ${(props) => props.theme.spacing.sm};
  color: #475569;
  text-align: center;
  max-width: 80px;
  line-height: 1.3;
`;
