import {
  getFragranceBySlug,
  getFragranceCategories,
  getFragranceOccasions,
} from "../../../utils/fragranceUtils";
import { getFragranceSeasons } from "../../../utils/seasonsUtils";
import { Navigate } from "react-router-dom";
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

const ArmafClubDeNuitManReview: React.FC = () => {
  const fragrance = getFragranceBySlug("armaf-club-de-nuit-man");
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
      ratingValue: "4",
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2024-12-01",
    reviewBody: `In-depth review of ${fragrance.name} by ${fragrance.house}. ${fragrance.description}`,
  };

  return (
    <>
      <SEO
        title={`${fragrance.name} Review | ${fragrance.house} Fragrance Analysis`}
        description={`Detailed review of ${fragrance.name} by ${
          fragrance.house
        }. Discover notes, performance, longevity, and whether this ${
          fragrance.category?.[0] || "fragrance"
        } is worth buying.`}
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
                  <AssetLinkGrid
                    items={categoryData}
                    basePath="/categories"
                    aria-label="Browse scent categories"
                  />
                </ParagraphWrapper>
              </CategoryAndOccasionWrapperInner>

              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle>
                  Events & Activities
                </ScentAndOccasionTitle>
                <ParagraphWrapper>
                  <AssetLinkGrid
                    items={occasionData}
                    basePath="/occasions"
                    aria-label="Browse occasions for this fragrance"
                  />
                </ParagraphWrapper>
              </CategoryAndOccasionWrapperInner>

              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle>Seasons</ScentAndOccasionTitle>
                <ParagraphWrapper>
                  <AssetLinkGrid
                    items={seasonData}
                    basePath="/seasons"
                    aria-label="Browse seasons for this fragrance"
                  />
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
                  <strong>Armaf Club de Nuit Man</strong> is the
                  often-overlooked gem in Armaf's lineup that brilliantly
                  captures the Paco Rabanne 1 Million DNA at a fraction of the
                  price. While everyone talks about CDNIM as an Aventus clone,
                  this fragrance proves Armaf understands more than just Creed
                  dupes—they can nail the sweet, spicy, attention-grabbing
                  designer DNA too.
                </Paragraph>
                <Paragraph>
                  After testing this extensively as a budget-friendly
                  alternative to 1 Million, here's my honest take on whether
                  this underrated clone deserves more recognition in the
                  fragrance community.
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
                  Club de Nuit Man is a sweet, amber, spicy fragrance that
                  follows the same successful blueprint as 1 Million—loud,
                  confident, and designed to get compliments. It's that familiar
                  bubblegum-leather-spice combination that made 1 Million a club
                  legend, but with Armaf's signature nuclear performance at a
                  budget price point.
                </Paragraph>
                <Paragraph>
                  The scent opens with that recognizable sweet sparkle but
                  maintains a slightly more synthetic edge than the original.
                  However, given the massive price difference, most people won't
                  notice or care once they experience the performance you get
                  for under $30.
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
                  The note structure closely mirrors 1 Million, with some subtle
                  variations in the blending:
                </Paragraph>

                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0-20 mins):</strong> Opens with a bright,
                    slightly synthetic citrus blast—think blood orange and mint
                    but with that distinctive bubblegum sweetness. It's
                    immediately recognizable and attention-grabbing.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (20 mins - 4 hours):</strong> The heart
                    is where the spice comes through. Cinnamon and rose blend
                    with that leather accord. The rose is subtle but adds
                    sophistication, while the spice keeps it masculine and
                    intriguing.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (4+ hours):</strong> The dry down settles
                    into a warm, amber and patchouli base. It's less complex
                    than the original but maintains the same overall vibe and
                    lasts incredibly well.
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
                  This is where Armaf consistently delivers unbelievable value:
                </Paragraph>
                <Paragraph>
                  <strong>Longevity (9/10):</strong> Absolutely nuclear. 10-12
                  hours on skin easily, and I've detected it on clothes 2 days
                  later. For a $25 fragrance, this performance is almost
                  comical.
                </Paragraph>
                <Paragraph>
                  <strong>Projection (8/10):</strong> Massive projection for the
                  first 3-4 hours. This is not a shy fragrance—it will fill a
                  room. After the initial blast, it settles into a strong scent
                  bubble.
                </Paragraph>
                <Paragraph>
                  <strong>Sillage:</strong> Heavy and trail-leaving. You will be
                  noticed wearing this. 2-3 sprays is plenty—any more and you
                  risk becoming "that guy" who gasses out entire spaces.
                </Paragraph>
                <Paragraph>
                  <strong>Value (10/10):</strong> At $25-30, this is arguably
                  one of the best value propositions in cloning. You're getting
                  85-90% of the 1 Million experience with better longevity than
                  current 1 Million batches.
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
                <Paragraph>
                  Like 1 Million, this is a cold-weather nighttime specialist:
                </Paragraph>
                <Paragraph>
                  <strong>Perfect For:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Perfect occasions for this fragrance"
                >
                  <li role="listitem">Fall and winter evening events</li>
                  <li role="listitem">Clubbing and party environments</li>
                  <li role="listitem">Date nights in cool weather</li>
                  <li role="listitem">When you want maximum compliments</li>
                  <li role="listitem">Younger social gatherings</li>
                </TimeAndOccasionsList>
                <br />
                <Paragraph>
                  <strong>Avoid Wearing:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Occasions to avoid for this fragrance"
                >
                  <li role="listitem">Office settings (too loud)</li>
                  <li role="listitem">Hot summer days (cloying)</li>
                  <li role="listitem">Formal business meetings</li>
                  <li role="listitem">If you prefer subtle, quiet scents</li>
                </TimeAndOccasionsList>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="who-should-wear"
              >
                Who Should Wear It
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  This fragrance targets the same demographic as the
                  original—young, confident, and social:
                </Paragraph>
                <Paragraph>
                  <strong>The Ideal Wearer:</strong> 18-30, goes out regularly,
                  and wants a fragrance that gets noticed. You're not afraid to
                  be the center of attention and you appreciate massive value.
                </Paragraph>
                <Paragraph>
                  Pair this with: night-out attire—dark jeans, fitted shirts,
                  leather jackets, or stylish streetwear.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                id="reactions-subjectivity"
              >
                Reactions & Subjectivity
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  The compliment factor is high. It hits that sweet spot that
                  mass audiences love. Friends have asked what I'm wearing, then
                  been shocked at the price.
                </Paragraph>
                <Paragraph>
                  That said, it's not for everyone. The sweetness can be
                  overwhelming, and the synthetic opening might bother fragrance
                  snobs.
                </Paragraph>
                <Paragraph>
                  <strong>Spray advice:</strong> Start with 2 sprays MAX. This
                  stuff is nuclear, so respect the power.
                </Paragraph>
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
                  <strong>Is Armaf Club de Nuit Man worth it?</strong>{" "}
                  Absolutely. This is one of the best "bang for your buck"
                  fragrances in the entire clone market.
                </Paragraph>
                <Paragraph>
                  <strong>Who should buy it:</strong> If you love the 1 Million
                  DNA but don't want to pay designer prices. If you're a
                  compliment chaser who wants maximum impact for minimal
                  investment.
                </Paragraph>
                <Paragraph>
                  <strong>Who shouldn't buy it:</strong> If you hate sweet, loud
                  fragrances or if you're over 35 and want something more mature
                  and sophisticated.
                </Paragraph>
                <Paragraph>
                  <strong>My Rating: 4/5</strong> - Exceptional performance and
                  value. Held back only by the synthetic opening and lack of
                  versatility.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default ArmafClubDeNuitManReview;
