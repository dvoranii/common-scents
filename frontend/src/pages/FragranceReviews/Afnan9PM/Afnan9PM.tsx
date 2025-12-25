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

const Afnan9PMReview: React.FC = () => {
  const fragrance = getFragranceBySlug("afnan-9pm");
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
                  <strong>Afnan 9PM</strong> is a sophisticated evening scent
                  that punches way above its $35 price point. Released in 2020,
                  this EDP has quickly become one of the most talked-about
                  fragrances in the budget category. Often called the best Jean
                  Paul Gaultier Ultra Male clone, Afnan 9PM delivers incredible
                  performance and a crowd-pleasing scent profile that rivals
                  fragrances 4-5x its price.
                </Paragraph>
                <Paragraph>
                  After wearing this extensively through Toronto fall and winter
                  nights, here's my take on whether this fragrance lives up to
                  the hype.
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
                  Afnan 9PM is a sweet, spicy oriental gourmand that's designed
                  to turn heads. This isn't a subtle office scent—this is a
                  "look at me" fragrance for evening wear. The DNA is clearly
                  inspired by Ultra Male, but 9PM has its own personality with
                  slightly more depth and complexity than you'd expect at this
                  price point.
                </Paragraph>
                <Paragraph>
                  The scent profile leans heavily into the sweet and spicy
                  territory, making it perfect for fall/winter date nights,
                  clubbing, or any occasion where you want to make an
                  impression.
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
                  On paper, the notes are relatively simple, but the execution
                  is what makes this fragrance special:
                </Paragraph>

                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0-15 mins):</strong> Opens with a crisp
                    apple note paired with warm cinnamon. The apple is sweet but
                    not candy-like, and the cinnamon adds just enough spice to
                    keep it interesting.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (15 mins - 3 hours):</strong> The orange
                    blossom and lavender add a floral sophistication. The
                    lavender prevents it from being cloying, while the orange
                    blossom adds a creamy, slightly powdery quality.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (3+ hours):</strong> The dry down is
                    where 9PM really shines. Vanilla and tonka bean create a
                    warm, sweet base that's absolutely addictive, supported by a
                    touch of earthy patchouli.
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
                  Afnan 9PM offers performance that rivals many high-end
                  designer releases:
                </Paragraph>
                <Paragraph>
                  <strong>Longevity (8/10):</strong> Easily 8-10 hours on skin,
                  and detectable on clothes the next day. This is nuclear
                  performance for the price.
                </Paragraph>
                <Paragraph>
                  <strong>Projection (7/10):</strong> Strong for the first 2-3
                  hours. It will fill a room initially before settling into a
                  pleasant 2-3 foot bubble.
                </Paragraph>
                <Paragraph>
                  <strong>Sillage:</strong> Heavy. You will leave a trail. 2-3
                  sprays is usually the sweet spot—respect the power of this
                  juice.
                </Paragraph>
                <Paragraph>
                  <strong>Value (10/10):</strong> At $35, this is an absolute
                  steal. The performance and quality ratio is unmatched in the
                  budget category.
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
                  This is a specialized evening powerhouse. Here is when it
                  shines:
                </Paragraph>
                <Paragraph>
                  <strong>Perfect For:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Perfect occasions for this fragrance"
                >
                  <li role="listitem">Fall/Winter date nights</li>
                  <li role="listitem">Evening events or parties</li>
                  <li role="listitem">Clubbing or bars</li>
                  <li role="listitem">Cold weather social outings</li>
                </TimeAndOccasionsList>
                <br />
                <Paragraph>
                  <strong>Avoid Wearing:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Occasions to avoid for this fragrance"
                >
                  <li role="listitem">Conservative office settings</li>
                  <li role="listitem">High heat or summer days</li>
                  <li role="listitem">Formal/Black tie business events</li>
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
                  This fragrance screams confidence and youth.
                </Paragraph>
                <Paragraph>
                  <strong>The Ideal Wearer:</strong> 20-35, comfortable with
                  being noticed and likes fragrances that make a statement.
                  Perfect for someone who wants the Ultra Male vibe without the
                  designer price tag.
                </Paragraph>
                <Paragraph>
                  Pair this with: dark denim, leather jackets, suede boots, or
                  stylish evening wear.
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
                  This is a certified compliment magnet. It hits those
                  mass-appealing sweet notes that people around you will
                  genuinely enjoy.
                </Paragraph>
                <Paragraph>
                  However, it is polarizing for those who prefer subtle or
                  natural-smelling scents. It is unashamedly bold and sweet.
                </Paragraph>
                <Paragraph>
                  <strong>Spray routine:</strong> 2 sprays for intimate dates, 3
                  for the club. Do not go beyond 3 unless you are outdoors.
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
                  <strong>Is Afnan 9PM worth it?</strong> Absolutely. It is one
                  of the best value propositions in the entire fragrance world.
                </Paragraph>
                <Paragraph>
                  <strong>Who should buy it:</strong> Anyone wanting a
                  cold-weather evening beast on a budget. Lovers of sweet, spicy
                  gourmands.
                </Paragraph>
                <Paragraph>
                  <strong>Who shouldn't buy it:</strong> Fans of fresh, clean,
                  or "barely-there" scents. Those over 40 looking for something
                  traditionally mature.
                </Paragraph>
                <Paragraph>
                  <strong>My Rating: 4.5/5</strong> - Nearly perfect for its
                  category. It does exactly what it sets out to do with
                  incredible efficiency.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default Afnan9PMReview;
