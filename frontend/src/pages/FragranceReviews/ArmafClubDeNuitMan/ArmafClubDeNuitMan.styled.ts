// src/pages/FragranceReviews/Afnan9PM/Afnan9PM.styled.ts
import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl};
  ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
    ${(props) => props.theme.spacing.md};
  }
`;

export const IntroSection = styled.section`
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: 12px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const ReviewSection = styled.section`
  padding: 0 ${(props) => props.theme.spacing.xl} 0
    ${(props) => props.theme.spacing.xl};
  border-radius: 12px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.xl};

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.8;
  color: ${(props) => props.theme.colors.black};

  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: 1.7;
  }
`;

export const TimeAndOccasionsList = styled.ul`
  margin-inline-start: 40px;
`;

export const NotesList = styled.ul`
  padding: 0;
  margin: ${(props) => props.theme.spacing.lg} 0;
  margin-inline-start: 40px;
  list-style: none;

  li {
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: 1.8;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.spacing.lg};
    position: relative;

    &:before {
      content: "→";
      position: absolute;
      left: -20px;
      color: ${(props) => props.theme.colors.text};
      font-weight: 600;
    }

    strong {
      color: ${(props) => props.theme.colors.text};
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    li {
      font-size: ${(props) => props.theme.fontSizes.sm};
      padding-left: ${(props) => props.theme.spacing.lg};
    }
  }
`;
