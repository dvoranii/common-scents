import styled from "styled-components";
import { Link } from "react-router-dom";

export const SecondaryTagline = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.lg};
  letter-spacing: 1px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.md};
  width: 60%;
  margin: ${(props) => props.theme.spacing.lg} auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ContentSection1 = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const ContentSection1Inner = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xxxxl} 40px 0 40px;
  column-gap: 1.2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.lg};
  }
`;

export const TextWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: 2;
    padding-top: ${(props) => props.theme.spacing.lg};
  }
`;

export const AboutText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: 1;
  }

  picture {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  max-height: 600px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-height: 400px;
  }
`;

export const ContentSection2 = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const ContentSection2Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.xxxxl} 40px 0 40px;
`;

export const MissionTextWrapper = styled.div`
  margin: 0 auto;
`;
export const MissionText = styled.p`
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const ContentSection3 = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const ContentSection3Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.xxxxl} 40px 40px 40px;
`;

export const DifferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.lg};
  }
`;

export const DifferenceCard = styled.div`
  background: ${(props) => props.theme.colors.background || "#f9f9f9"};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.lg};
  }
`;

export const DifferenceTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.black};
`;

export const DifferenceDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text || "#333"};
`;

export const DifferenceLink = styled(Link)`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.base};
  padding-top: 1rem;
  font-weight: bold;
  transition: all 300ms ease;

  &:hover {
    color: #e99047;
  }
`;
