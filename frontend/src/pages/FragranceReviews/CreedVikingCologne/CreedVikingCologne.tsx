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

const CreedVikingCologneReview: React.FC = () => {
  const fragrance = getFragranceBySlug("creed-viking-cologne");
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
      ratingValue: "4.0", // Based on your 8/10 rating
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
            <FragranceHeader fragrance={fragrance} bottleImageSize="medium" />
            <SummarySection fragranticaUrl={fragrance.fragranticaUrl} />

            <CategoryAndOccasionWrapper aria-labelledby="fragrance-categories">
              <CategoryAndOccasionWrapperInner>
                <ScentAndOccasionTitle as="h2" id="fragrance-categories">
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
                <ScentAndOccasionTitle as="h2">
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
                <ScentAndOccasionTitle as="h2">Seasons</ScentAndOccasionTitle>
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
                  <strong>Creed Viking Cologne</strong> is the refreshing 2022
                  reinterpretation of the original Viking, offering a lighter,
                  more versatile take on the classic masculine DNA. Where Viking
                  was bold and challenging, Viking Cologne is approachable and
                  sophisticated—a modern gentleman's fragrance that bridges the
                  gap between classic Creed elegance and contemporary freshness.
                </Paragraph>
                <Paragraph>
                  After testing this through spring and summer in various
                  settings, here's my take on whether this premium-priced
                  fragrance justifies its cost and deserves a spot in your
                  collection.
                </Paragraph>
              </ParagraphWrapper>
            </IntroSection>

            <ReviewSection>
              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="fragrance-overview"
              >
                Fragrance Overview
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  Viking Cologne is a bright, aromatic fougère that maintains
                  the original Viking's sophistication while being significantly
                  more wearable. This isn't a complete departure from the
                  original, but rather an evolution—taking the core DNA and
                  making it more versatile for everyday wear and warmer
                  climates.
                </Paragraph>
                <Paragraph>
                  The scent opens with incredible freshness but maintains that
                  distinct Creed quality throughout. It's sophisticated enough
                  for the boardroom but fresh enough for weekend brunches. If
                  you found the original Viking too intense or spicy, this
                  cologne version might be your perfect gateway into the house.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="note-breakdown"
              >
                Note Breakdown - My Experience
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  The note pyramid is classic Creed—complex, layered, and
                  expertly blended:
                </Paragraph>

                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0-30 mins):</strong> The opening is an
                    explosion of freshness—citrus notes of lemon and bergamot
                    dance with pink pepper, creating an immediately uplifting
                    and sophisticated first impression. The pink pepper adds
                    just enough spice to keep it interesting without being
                    overwhelming.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (30 mins - 4 hours):</strong> As the
                    citrus settles, the heart reveals a beautiful aromatic
                    structure. Lavender provides classic fougère elegance, while
                    sandalwood begins to emerge with its creamy, woody
                    character. This is where the fragrance shows its
                    sophistication—it's fresh but never simple.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (4+ hours):</strong> The dry down is pure
                    class. Sandalwood and ambergris create a creamy, slightly
                    salty foundation that's incredibly addictive. There's a
                    subtle muskiness that keeps it skin-close and intimate.
                  </li>
                </NotesList>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="performance-metrics"
              >
                Performance Metrics
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  For a cologne concentration, the performance is impressive but
                  manages expectations appropriately:
                </Paragraph>
                <Paragraph>
                  <strong>Longevity (7/10):</strong> 6-8 hours on skin, and I
                  can detect it on clothes the next day. It becomes a skin scent
                  after about 5 hours, but it's still present. For a fresh
                  fragrance, this is above average.
                </Paragraph>
                <Paragraph>
                  <strong>Projection (6/10):</strong> Moderate projection for
                  the first 2 hours—noticeable but not overwhelming. It settles
                  into a personal bubble that's perfect for professional
                  settings.
                </Paragraph>
                <Paragraph>
                  <strong>Sillage:</strong> Moderate and elegant. It leaves a
                  refined trail rather than an aggressive one. You can
                  comfortably wear this in office settings without worrying
                  about offending colleagues. 4-5 sprays is the sweet spot.
                </Paragraph>
                <Paragraph>
                  <strong>Value (6/10):</strong> At Creed's premium pricing,
                  this is an investment. However, for a sophisticated fresh
                  fragrance that works year-round, it justifies its cost for
                  those who appreciate the Creed quality.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="best-time-occasions"
              >
                Best Time & Occasions
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  This is one of Creed's most versatile releases in recent
                  years:
                </Paragraph>
                <Paragraph>
                  <strong>Perfect For:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Perfect occasions for this fragrance"
                >
                  <li role="listitem">Spring and summer daytime wear</li>
                  <li role="listitem">Office and professional settings</li>
                  <li role="listitem">Date nights and romantic dinners</li>
                  <li role="listitem">Weekend outings and brunches</li>
                  <li role="listitem">Business meetings and formal events</li>
                </TimeAndOccasionsList>
                <br />
                <Paragraph>
                  <strong>Avoid Wearing:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Occasions to avoid for this fragrance"
                >
                  <li role="listitem">Freezing winter days</li>
                  <li role="listitem">When you want extreme projection</li>
                  <li role="listitem">Club environments</li>
                  <li role="listitem">
                    If you're looking for a beast-mode performer
                  </li>
                </TimeAndOccasionsList>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="who-should-wear"
              >
                Who Should Wear It
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  Viking Cologne speaks to the modern gentleman who values
                  sophistication over loudness:
                </Paragraph>
                <Paragraph>
                  <strong>The Ideal Wearer:</strong> 25-45, established in your
                  career but maintaining a contemporary style. You want a
                  fragrance that complements your presence rather than
                  announcing it.
                </Paragraph>
                <Paragraph>
                  Pair this with: well-tailored business casual wear, crisp
                  button-downs, quality knitwear, or sophisticated summer
                  attire.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="reactions-subjectivity"
              >
                Reactions & Subjectivity
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  The reactions to Viking Cologne have been consistently
                  positive but subtle. You're more likely to get "you smell
                  nice" comments rather than "what are you wearing?" from across
                  the room.
                </Paragraph>
                <Paragraph>
                  It's unlikely to polarize people, making it a safe choice for
                  those who want quality without controversy.
                </Paragraph>
                <Paragraph>
                  <strong>Spray advice:</strong> 4-5 sprays total—neck, wrists,
                  and clothes. It's hard to overspray this one.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="final-verdict"
              >
                Final Verdict
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  <strong>Is Creed Viking Cologne worth it?</strong> If you have
                  the budget and appreciate sophisticated fresh fragrances,
                  absolutely. It fills a valuable niche in any collection.
                </Paragraph>
                <Paragraph>
                  <strong>Who should buy it:</strong> Those who want a signature
                  scent across multiple seasons. Fans of the house style who
                  want something more wearable than Aventus or the original
                  Viking.
                </Paragraph>
                <Paragraph>
                  <strong>Who shouldn't buy it:</strong> If you're on a tight
                  budget or prefer bold, room-filling fragrances.
                </Paragraph>
                <Paragraph>
                  <strong>My Rating: 4.0/5</strong> - Masterful blending and
                  exceptional quality, only held back by the premium price and
                  moderate performance.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default CreedVikingCologneReview;
