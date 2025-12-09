import { useParams, Navigate } from "react-router-dom";
import {
  getAllOccasions,
  getOccasionBySlug,
} from "../../../utils/occasionsUtils";
import { occasionDetails } from "../../../data/occasionDetails";

import * as S from "./OccasionDetailPage.styled";

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

// Fixed logic for overlayOpacity
const overlayOpacity = (slug: string): number => {
  return OCCASION_OVERLAY_OPACITY[slug] ?? 0;
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
    // 2. Prefix all components from the local style file with S.
    <S.PageWrapper>
      <S.HeroImageContainer
        $bgImg={occasion.image}
        $overlayOpacity={overlayOpacity(occasion.slug)}
      >
        <S.HeroImageContainerInner>
          <MainTitle $center $color={titleColor}>
            {occasion.name}
          </MainTitle>

          {details?.subtitle && (
            <S.OccasionSubtitle $color={titleColor}>
              {details.subtitle}
            </S.OccasionSubtitle>
          )}
        </S.HeroImageContainerInner>
      </S.HeroImageContainer>

      <S.ContentContainer>
        <S.Description>
          {details?.fullDescription || occasion.description}
        </S.Description>

        {details?.settings && details.settings.length > 0 && (
          <S.SettingsSection>
            <S.SectionTitle>Perfect For</S.SectionTitle>
            <S.SettingGrid>
              {details.settings.map((setting) => (
                <S.SettingCard key={setting.title}>
                  <S.SettingTitle>{setting.title}</S.SettingTitle>
                  <S.SettingDescription>
                    {setting.description}
                  </S.SettingDescription>
                  <S.SettingImage src={setting.image} />
                </S.SettingCard>
              ))}
            </S.SettingGrid>
          </S.SettingsSection>
        )}

        <S.FragranceListPlaceholder>
          <S.SectionTitle>Recommended Fragrances</S.SectionTitle>
          <p style={{ textAlign: "center", color: "#666" }}>
            Fragrance recommendations coming soon...
          </p>
        </S.FragranceListPlaceholder>

        <PageNavigation
          currentSlug={occasionSlug!}
          items={occasions.map((cat) => ({ slug: cat.slug, title: cat.name }))}
          basePath="/occasions"
        />
        <S.SeeSeasonsLink to="/seasons/winter">View Seasons</S.SeeSeasonsLink>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default OccasionDetailPage;
