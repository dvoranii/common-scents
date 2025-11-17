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

export const CategoryAndOccasionWrapper = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: center;
  gap: 2.4rem;
  padding-top: ${(props) => props.theme.spacing.xxxxl};
  padding-bottom: ${(props) => props.theme.spacing.xxxxl};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 55%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 1px;
    background-color: lightgrey;
    z-index: 1;
    height: 60%;
  }
`;
export const CategoryAndOccasionWrapperInner = styled.div`
  padding: 20px;
  flex: 1;
`;

export const ScentAndOccasionTitle = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: bold;
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  text-align: center;
`;
