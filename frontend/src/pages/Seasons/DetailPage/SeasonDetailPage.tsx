import { useParams, Navigate } from "react-router-dom";
import { getAllSeasons, getSeasonBySlug } from "../../../utils/seasonsUtils";
import { seasonDetails } from "../../../data/seasonDetail";
import * as S from "./SeasonDetailPage.styled";
import { MainTitle } from "../../../styles/CommonStyles";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";

const SEASON_TITLE_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "#ffffff",
  summer: "#ffffff",
  autumn: "#ffffff",
};

const SEASON_OVERLAY_OPACITY: Record<string, number> = {
  winter: 0.3,
  spring: 0.2,
  summer: 0.25,
  autumn: 0.4,
};

const getTitleColor = (slug: string): string => {
  return SEASON_TITLE_COLORS[slug] || "#ffffff";
};

const overlayOpacity = (slug: string): number => {
  return SEASON_OVERLAY_OPACITY[slug] ?? 0.3;
};

const SeasonDetailPage: React.FC = () => {
  const { seasonSlug } = useParams<{ seasonSlug: string }>();
  const season = seasonSlug ? getSeasonBySlug(seasonSlug) : undefined;
  const details = seasonSlug ? seasonDetails[seasonSlug] : undefined;
  const seasons = getAllSeasons();

  if (!season) {
    return <Navigate to="/" replace />;
  }

  const titleColor = getTitleColor(season.slug);

  return (
    <S.PageWrapper>
      <S.HeroImageContainer
        $bgImg={season.image}
        $overlayOpacity={overlayOpacity(season.slug)}
      >
        <S.HeroImageContainerInner>
          <MainTitle $center $color={titleColor}>
            {season.name}
          </MainTitle>

          {details?.subtitle && (
            <S.SeasonSubtitle $color={titleColor}>
              {details.subtitle}
            </S.SeasonSubtitle>
          )}
        </S.HeroImageContainerInner>
      </S.HeroImageContainer>

      <S.ContentContainer>
        <S.Description>
          {details?.fullDescription || season.description}
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
          currentSlug={seasonSlug!}
          items={seasons.map((s) => ({ slug: s.slug, title: s.name }))}
          basePath="/seasons"
        />
        <S.SeeEventsLink to="/occasions/daily-driver">
          See Events & Activities
        </S.SeeEventsLink>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default SeasonDetailPage;
