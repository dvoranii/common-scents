import React from "react";
import { Link, Navigate } from "react-router-dom";
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

const RayhaanElixir: React.FC = () => {
  const fragrance = getFragranceBySlug("rayhaan-elixir");
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
      ratingValue: "4.5",
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2026-01-02",
    reviewBody: `Detailed comparison and review of Rayhaan Elixir, the viral alternative to JPG Le Male Elixir. Exploring its performance, notes, and value.`,
  };

  return (
    <>
      <SEO
        title={`${fragrance.name} Review | The Ultimate JPG Elixir Alternative`}
        description={`Is Rayhaan Elixir the most accurate clone of JPG Le Male Elixir? Read our technical breakdown of notes, performance, and value comparison.`}
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
                  <strong>Rayhaan Elixir</strong> has exploded in popularity as
                  a viral, high-performance alternative to{" "}
                  <Link
                    to="/fragrance-reviews/jpg-le-male-elixir"
                    style={{ color: "#e07a3f", fontWeight: "bold" }}
                  >
                    Jean Paul Gaultier Le Male Elixir
                  </Link>
                  . While many clones fail to capture the specific
                  "honeyed-tobacco" density of the original, Rayhaan has managed
                  to bottle that luxurious DNA with surprising accuracy at
                  roughly a quarter of the price.
                </Paragraph>
                <Paragraph>
                  Living in the GTA, I’ve tested this through several frigid
                  evenings to see if it holds up as a true "beast mode"
                  performer or if it's just social media hype.
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
                  Rayhaan Elixir leans slightly more into the minty freshness
                  during the opening than the original JPG, giving it a more
                  energetic start. However, the dry down is where the magic
                  happens—the benzoin and vanilla create that signature sweet,
                  resinous cloud that is almost indistinguishable from the
                  original in the air.
                </Paragraph>
                <Paragraph>
                  It captures the "golden" aura of the Elixir DNA perfectly.
                  It’s sweet, loud, and undeniably attractive, making it a
                  top-tier choice for the winter rotation.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="note-breakdown"
              >
                Note Breakdown - My Experience
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  Rayhaan simplifies the structure but maximizes the impact of
                  each level:
                </Paragraph>

                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0–20 mins):</strong> A bright, sharp
                    opening of Mint and Bergamot. This is significantly fresher
                    and more "piercing" than the JPG, providing high initial
                    volatility that fills a room instantly.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (20 mins – 3 hours):</strong> Lavender
                    and Benzoin take over. The lavender adds a clean, masculine
                    touch, while the benzoin starts the transition into the
                    warm, resinous sweetness the Elixir line is known for.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (3+ hours):</strong> The dry down is
                    dominated by Vanilla and Tonka Bean. It’s thick, creamy, and
                    persistent, lingering on skin and clothes for an impressive
                    duration.
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
                  Like most Middle Eastern "Elixir" clones, this is built to
                  perform. It stands toe-to-toe with the designer original in
                  terms of raw power.
                </Paragraph>
                <Paragraph>
                  <strong>Longevity (8.5/10):</strong> Expect a solid 8–10 hours
                  on skin. On a winter coat or hoodie, you’ll be smelling this
                  for days.
                </Paragraph>
                <Paragraph>
                  <strong>Projection (8.5/10):</strong> Very strong for the
                  first 2–3 hours. It projects significantly further than the
                  average designer scent, easily creating a 4-5 foot scent
                  bubble.
                </Paragraph>
                <Paragraph>
                  <strong>Value (10/10):</strong> This is where Rayhaan wins.
                  For around $40–$50 CAD/USD, you are getting 95% of the scent
                  profile of a $160+ bottle.
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
                    <strong>Perfect For:</strong> Night outs, winter dates, and
                    outdoor evening events.
                  </li>
                  <li role="listitem">
                    <strong>Avoid Wearing:</strong> High-heat summer days (it
                    will become cloying) or small, enclosed office spaces.
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
                  <strong>Is Rayhaan Elixir worth it?</strong> If you love the
                  sweet, honeyed-vanilla profile of JPG Le Male Elixir but want
                  to save your "legacy" bottle for special occasions, this is
                  the perfect daily driver.
                </Paragraph>
                <Paragraph>
                  <strong>My Rating: 4.5/5</strong> – An incredible achievement
                  in clone perfumery. It’s long-lasting, loud, and captures the
                  soul of the original masterpiece.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default RayhaanElixir;
