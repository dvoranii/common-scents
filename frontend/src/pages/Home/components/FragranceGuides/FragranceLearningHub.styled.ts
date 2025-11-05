import styled from "styled-components";

export const GuidesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xxl};
  position: relative; /* Needed for the pseudo-element */

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: ${(props) => props.theme.colors.border};
      transform: translateX(-50%);
    }
  }
`;

export const DualSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  background: #eee;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  padding-top: ${(props) => props.theme.spacing.sm};
`;

export const GuidesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const GuideItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export const GuideTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #888888;
  }
`;

export const GuideMeta = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textLight};
`;
