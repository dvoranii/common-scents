import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl};
  ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) =>
      `${props.theme.spacing.lg} ${props.theme.spacing.xxxl}`};
  }
`;

export const IntroSection = styled.section`
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
`;

export const ReviewSection = styled.section`
  border-radius: 12px;
`;

export const ParagraphWrapper = styled.div`
  padding-bottom: ${(props) => props.theme.spacing.lg};
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
  font-size: ${(props) => props.theme.fontSizes.base};
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
