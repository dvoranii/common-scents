import { useParams, Navigate } from "react-router-dom";
import {
  getAllOccasions,
  getOccasionBySlug,
} from "../../../utils/occasionsUtils";
import { occasionDetails } from "../../../data/occasionDetails";
import {
  PageWrapper,
  HeroImageContainer,
  ContentContainer,
  OccasionSubtitle,
  Description,
  SettingsSection,
  SectionTitle,
  SettingGrid,
  SettingCard,
  SettingTitle,
  SettingDescription,
  FragranceListPlaceholder,
  HeroImageContainerInner,
  SettingImage,
} from "./OccasionDetailPage.styled";
import { MainTitle } from "../../../styles/CommonStyles";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";

const OCCASION_TITLE_COLORS: Record<string, string> = {
  "date-night": "#ffffff",
  "daily-driver": "#ffffff",
  "night-out": "#ffffff",
  formal: "#ffffff",
  office: "#1d2636",
  "active-gym": "#ffffff",
  "summer-vibes": "#ffffff",
  "cold-weather": "#ffffff",
};

const OCCASION_OVERLAY_OPACITY: Record<string, number> = {
  "date-night": 0.35,
  "daily-driver": 0.4,
  "night-out": 0,
  formal: 0.5,
  office: 0,
  "active-gym": 0.3,
  "summer-vibes": 0.25,
  "cold-weather": 0.5,
};

const getTitleColor = (slug: string): string => {
  return OCCASION_TITLE_COLORS[slug] || "#ffffff";
};

const overlayOpacity = (slug: string): number => {
  return OCCASION_OVERLAY_OPACITY[slug] ?? true;
};

const OccasionDetailPage: React.FC = () => {
  const { occasionSlug } = useParams<{ occasionSlug: string }>();
  const occasion = occasionSlug ? getOccasionBySlug(occasionSlug) : undefined;
  const details = occasionSlug ? occasionDetails[occasionSlug] : undefined;
  const occasions = getAllOccasions();

  if (!occasion) {
    return <Navigate to="/" replace />;
  }

  const titleColor = getTitleColor(occasion.slug);

  return (
    <PageWrapper>
      <HeroImageContainer
        $bgImg={occasion.image}
        $overlayOpacity={overlayOpacity(occasion.slug)}
      >
        <HeroImageContainerInner>
          <MainTitle $center $color={titleColor}>
            {occasion.name}
          </MainTitle>

          {details?.subtitle && (
            <OccasionSubtitle $color={titleColor}>
              {details.subtitle}
            </OccasionSubtitle>
          )}
        </HeroImageContainerInner>
      </HeroImageContainer>

      <ContentContainer>
        <Description>
          {details?.fullDescription || occasion.description}
        </Description>

        {details?.settings && details.settings.length > 0 && (
          <SettingsSection>
            <SectionTitle>Perfect For</SectionTitle>
            <SettingGrid>
              {details.settings.map((setting) => (
                <SettingCard key={setting.title}>
                  <SettingTitle>{setting.title}</SettingTitle>
                  <SettingDescription>{setting.description}</SettingDescription>
                  <SettingImage src={setting.image} />
                </SettingCard>
              ))}
            </SettingGrid>
          </SettingsSection>
        )}

        <FragranceListPlaceholder>
          <SectionTitle>Recommended Fragrances</SectionTitle>
          <p style={{ textAlign: "center", color: "#666" }}>
            Fragrance recommendations coming soon...
          </p>
        </FragranceListPlaceholder>

        <PageNavigation
          currentSlug={occasionSlug!}
          items={occasions.map((cat) => ({ slug: cat.slug, title: cat.name }))}
          basePath="/occasions"
        />
      </ContentContainer>
    </PageWrapper>
  );
};

export default OccasionDetailPage;
