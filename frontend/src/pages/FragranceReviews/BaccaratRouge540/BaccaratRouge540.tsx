import React from "react";
import { Navigate } from "react-router-dom";
import {
  getFragranceBySlug,
  getFragranceCategories,
  getFragranceOccasions,
} from "../../../utils/fragranceUtils";
import { getFragranceSeasons } from "../../../utils/seasonsUtils";
import {
  PageWrapper,
  PageWrapperInner,
  IntroSection,
  ReviewSection,
  Paragraph,
  NotesList,
  TimeAndOccasionsList,
  ParagraphWrapper,
  CategoryAndOccasionWrapper,
  CategoryAndOccasionWrapperInner,
  ScentAndOccasionTitle,
} from "../../../styles/shared/Reviews.styled";
import { AssetLinkGrid } from "../../../components/AssetLinkGrid/AssetLinkGrid";
import { FragranceHeader } from "../../../components/FragranceReviews/FragranceHeader";
import SummarySection from "../../../components/SummarySection/SummarySection";
import { MainTitle, SectionTitle } from "../../../styles/CommonStyles";
import { SEO } from "../../../components/SEO/SEO";

const BR540Review: React.FC = () => {
  const fragrance = getFragranceBySlug("baccarat-rouge-540-edp");
  const occasionData = getFragranceOccasions(fragrance?.occasion || []);
  const seasonData = getFragranceSeasons(fragrance?.seasons || []);

  if (!fragrance) {
    return <Navigate to="/" replace />;
  }

  const categoryData = getFragranceCategories(fragrance.categorySlugs);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: fragrance.name,
      brand: fragrance.house,
      description: fragrance.description,
      category: fragrance.category?.join(", "),
      image: fragrance.thumbnailImage,
    },
    author: {
      "@type": "Organization",
      name: "Common Scents HQ",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.14",
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2026-01-02",
    reviewBody: `An in-depth analysis of Baccarat Rouge 540 EDP, exploring its unique molecular structure, 'burnt sugar' DNA, and its legendary sillage architecture.`,
  };

  return (
    <>
      <SEO
        title={`${fragrance.name} Review | The Shimmering Molecular Masterpiece`}
        description={`Detailed review of Baccarat Rouge 540 EDP by MFK. Discover why this 'burnt sugar' DNA is a masterclass in modern perfumery architecture.`}
        canonical={`https://commonscentshq.com/fragrance-reviews/${fragrance.slug}`}
        image={fragrance.thumbnailImage}
        type="article"
        structuredData={structuredData}
      />
      <main>
        <PageWrapper>
          <PageWrapperInner>
            <FragranceHeader fragrance={fragrance} bottleImageSize="xlarge" />
            <SummarySection fragranticaUrl={fragrance.fragranticaUrl} />

            <CategoryAndOccasionWrapper aria-labelledby="fragrance-categories">
              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle id="fragrance-categories">
                  Scent Categories
                </ScentAndOccasionTitle>
                <ParagraphWrapper>
                  <AssetLinkGrid items={categoryData} basePath="/categories" />
                </ParagraphWrapper>
              </CategoryAndOccasionWrapperInner>
              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle>
                  Events & Activities
                </ScentAndOccasionTitle>
                <ParagraphWrapper>
                  <AssetLinkGrid items={occasionData} basePath="/occasions" />
                </ParagraphWrapper>
              </CategoryAndOccasionWrapperInner>
              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle>Seasons</ScentAndOccasionTitle>
                <ParagraphWrapper>
                  <AssetLinkGrid items={seasonData} basePath="/seasons" />
                </ParagraphWrapper>
              </CategoryAndOccasionWrapperInner>
            </CategoryAndOccasionWrapper>

            <IntroSection aria-labelledby="review-intro">
              <MainTitle $padding="0px" id="review-intro">
                Let's Review
              </MainTitle>
              <br />
              <ParagraphWrapper>
                <Paragraph>
                  <strong>Baccarat Rouge 540 EDP</strong> is more than just a
                  popular fragrance; it is a masterclass in modern molecular
                  artistry. Released in 2015 to celebrate the 250th anniversary
                  of the Baccarat crystal house, it has become the most
                  influential DNA of the last decade.
                </Paragraph>
                <Paragraph>
                  It doesn't follow traditional perfumery rules. It doesn't
                  project a heavy cloud; instead, it shimmers on the skin like
                  an olfactory "force field," appearing and disappearing
                  throughout the day in a way that defies conventional physics.
                </Paragraph>
              </ParagraphWrapper>
            </IntroSection>

            <ReviewSection>
              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="fragrance-overview"
              >
                Fragrance Overview
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  The genius of BR540 lies in its **transparency**. By utilizing
                  massive dosages of Hedione and Ambroxan, Francis Kurkdjian
                  created a scent that feels airy and weightless but possesses
                  legendary staying power. It is the definitive "3D
                  fragrance"—it occupies the air around the wearer with a sweet,
                  metallic, and mineral sillage that is impossible to ignore.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="note-breakdown"
              >
                The Note Architecture
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  BR540 is famously abstract. While the notes list is simple,
                  the way they interact creates a totally unique "burnt sugar"
                  accord:
                </Paragraph>
                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0–30 mins):</strong> Opens with the
                    medicinal and metallic spice of Saffron paired with a
                    ghostly, airy Jasmine. It is bright, sharp, and immediately
                    luxurious.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (30 mins – 4 hours):</strong> This is
                    where the "burnt sugar" accord peaks. Amberwood and
                    Ambergris create a mineral, salty sweetness that feels
                    crystalline and transparent.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (4+ hours):</strong> The dry down is
                    woody and dry. Fir Resin and Cedar provide a sophisticated
                    backbone that keeps the sweetness from becoming cloying.
                  </li>
                </NotesList>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="performance-metrics"
              >
                Performance Metrics
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  <strong>Longevity (9.5/10):</strong> It is eternal. You will
                  smell this on your skin after a shower and on your laundry
                  weeks later.
                </Paragraph>
                <Paragraph>
                  <strong>Sillage (10/10):</strong> Peerless. The sillage of
                  BR540 is its greatest weapon—it leaves a long, shimmering
                  trail that people will follow from across a room.
                </Paragraph>
                <Paragraph>
                  <strong>Olfactory Fatigue Note:</strong> Be careful—BR540 is
                  the #1 culprit for "nose blindness." You may think it has
                  vanished, but those around you can still smell it vividly.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="best-time-occasions"
              >
                Best Time & Occasions
              </SectionTitle>
              <ParagraphWrapper>
                <TimeAndOccasionsList role="list">
                  <li role="listitem">
                    <strong>Perfect For:</strong> High-end events, professional
                    settings, and intimate dates.
                  </li>
                  <li role="listitem">
                    <strong>Seasons:</strong> Truly a year-round masterpiece,
                    though it shines brightest in the crisp air of Spring and
                    Autumn.
                  </li>
                </TimeAndOccasionsList>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="final-verdict"
              >
                Final Verdict
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  <strong>My Rating: 4.14/5</strong> – Despite the countless
                  clones and its massive popularity, the original EDP remains
                  the gold standard for molecular transparency. It is essential
                  for any collector who appreciates the technical evolution of
                  modern perfumery.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default BR540Review;
