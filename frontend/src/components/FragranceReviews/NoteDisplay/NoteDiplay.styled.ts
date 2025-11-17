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
  gap: 1.2rem;

  @media screen and (max-width: 940px) {
    flex-wrap: wrap;
  }
`;

export const NoteImage = styled.img`
  width: clamp(50px, 8vw, 4rem);
  height: auto;
  object-fit: cover;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  margin-top: ${(props) => props.theme.spacing.sm};
  color: #475569;
  text-align: center;
  max-width: 80px;
  line-height: 1.3;
`;

export const NoteItem = styled.div<{
  $isHighlighted?: boolean;
  $isSelected?: boolean;
  $highlightColor?: string;
  $clickable?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  transition: transform 0.2s ease;
  margin-top: ${(props) => props.theme.spacing.sm};
  transition: all 0.2s ease;
  padding: 8px 0;

  ${(props) =>
    props.$clickable &&
    `
    cursor: pointer;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
      transform: translateY(-1px);
    }
    
    &:hover ${NoteImage} {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }
  `}

  ${(props) =>
    props.$isHighlighted &&
    `
    background: ${props.$highlightColor || "rgba(100, 149, 237, 0.1)"};
    box-shadow: 0 0 0 2px ${
      props.$highlightColor || "rgba(100, 149, 237, 0.5)"
    };
    transform: translateY(-2px);
    
    ${NoteImage} {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    ${NoteName} {
      color: #1e293b;
    }
  `}
  
  ${(props) =>
    props.$isSelected &&
    `
    background: rgba(100, 149, 237, 0.15);
    box-shadow: 0 0 0 2px rgba(100, 149, 237, 0.8);
    
    ${NoteImage} {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    ${NoteName} {
      color: #1e293b;
    }
  `}
`;
