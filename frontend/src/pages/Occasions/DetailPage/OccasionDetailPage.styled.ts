import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeroImageContainer = styled.div<{
  $bgImg: string;
  $overlayOpacity?: number;
}>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;

  ${(props) =>
    props.$overlayOpacity &&
    props.$overlayOpacity > 0 &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, ${props.$overlayOpacity});
      z-index: 1;
    }
  `}

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 400px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 500px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 700px;
  }
`;

export const HeroImageContainerInner = styled.div`
  max-width: 1200px;
  z-index: 999;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const OccasionSubtitle = styled.h2<{ $color?: string }>`
  text-align: center;
  color: ${(props) => props.$color || props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 400;
  font-family: "Lato";
  margin-bottom: ${(props) => props.theme.spacing.xl};
  letter-spacing: 2px;
  text-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  padding-top: 8px;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${(props) => props.theme.spacing.xxl};
  padding-top: ${(props) => props.theme.spacing.xxl};
`;

export const SettingsSection = styled.section`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
`;

export const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  text-align: center;
  /* color: ${(props) => props.theme.colors.text}; */
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.xl};
  font-weight: 600;
`;

export const SettingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SettingCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.xl};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const SettingTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const SettingDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const ExampleScents = styled.p`
  font-style: italic;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

export const FragranceListPlaceholder = styled.section`
  margin-top: ${(props) => props.theme.spacing.xxxl};
  padding: ${(props) => props.theme.spacing.xxl};

  border-radius: ${(props) => props.theme.spacing.md};
  min-height: 200px;
`;

export const OccasionNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
`;

export const NavButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 20px;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #e99047;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #efac6f;
    color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
