import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  padding-bottom: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 500px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 600px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const OccasionTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const OccasionSubtitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${(props) => props.theme.spacing.xxl};
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
