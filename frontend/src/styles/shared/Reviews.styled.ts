import styled from "styled-components";
import WhiteTextureBG from "/assets/images/white-texture-bg-2.webp";

export const PageWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  ${(props) => props.theme.spacing.lg};
  background: linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.65)
    ),
    url(${WhiteTextureBG});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) =>
      `${props.theme.spacing.lg} ${props.theme.spacing.xxxl}`};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) =>
      `${props.theme.spacing.lg} ${props.theme.spacing.xl}`};
  }
`;

export const PageWrapperInner = styled.div`
  max-width: 1600px;
  margin: 0 auto;
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
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  padding-top: ${(props) => props.theme.spacing.xxxxl};
  padding-bottom: ${(props) => props.theme.spacing.xxxxl};
  position: relative;

  &::after {
    display: none;
  }
`;

export const CategoryAndOccasionWrapperInner = styled.div`
  padding: 12px;
  flex: 1;
  min-width: 250px;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }

  @media screen and (max-width: 886px) {
    &:nth-child(2) {
      border-right: none;
    }

    &:nth-child(1) {
      border-right: 1px solid lightgrey;
    }
  }

  @media screen and (max-width: 636px) {
    padding: 20px 0 0 0;
    &:nth-child(1) {
      border-right: none;
    }
  }
`;

export const ScentAndOccasionTitle = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: bold;
  padding-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;
  color: #222222;
`;
