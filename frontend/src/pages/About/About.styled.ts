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
  background: #eceff3;
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

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

export const CTASection = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
  border-top: 1px solid ${(props) => props.theme.colors.border || "#e0e0e0"};
`;

export const CTASectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${(props) => props.theme.spacing.xxxxl} 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.xxxl} 40px;
  }
`;

export const CTATitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export const CTAText = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text || "#333"};
  max-width: 700px;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  line-height: 1.6;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.spacing.md};
`;

export const PrimaryButton = styled.button`
  position: relative;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid #e78732;
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: 16px 32px;
  height: fit-content;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #efad70, #e88e44);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SecondaryLinkButton = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid #c7c6cb;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  z-index: 1;

  span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(to bottom, #92400e 4%, #451a03 96%);
    transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;

    span {
      width: 225%;
      height: 562.5px;
    }
  }
`;
