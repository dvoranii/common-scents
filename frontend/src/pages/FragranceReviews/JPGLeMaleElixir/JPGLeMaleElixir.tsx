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

const JPGLeMaleElixirReview: React.FC = () => {
  const fragrance = getFragranceBySlug("jpg-le-male-elixir");
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
      ratingValue: "4.7",
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
                  <strong>Jean Paul Gaultier Le Male Elixir</strong> is the bold
                  and intoxicating evolution of the iconic Le Male DNA. Released
                  in 2023, this flanker dials up the warmth, sweetness, and
                  sensuality, creating one of the richest and most seductive
                  fragrances in the Le Male line. It’s smoother, darker, and
                  more mature than the original — a full-bodied elixir designed
                  for nights that turn into mornings.
                </Paragraph>
                <Paragraph>
                  After multiple wears during cool Toronto evenings and nights
                  out, here’s my take on why Le Male Elixir might just be the
                  best Le Male release since the original — and whether it
                  deserves the hype.
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
                  Le Male Elixir stays true to its roots but adds a luxurious
                  twist. The vanilla and amber are creamy and enveloping,
                  balanced by mint, lavender, and honey. It’s seductive and
                  undeniably modern — think the comforting sweetness of Le Male,
                  but with an extra layer of depth, warmth, and refinement.
                </Paragraph>
                <Paragraph>
                  This is not a fresh barbershop fougère like the 1995 original
                  — it’s a darker, more resinous experience meant for cooler
                  nights and close encounters. It’s “grown-up Le Male,” without
                  losing the signature DNA fans love.
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
                  Officially, the note structure is minimal, but the scent feels
                  rich and multi-layered. Here’s how it evolves on skin:
                </Paragraph>

                <NotesList role="list" aria-label="Fragrance note breakdown">
                  <li role="listitem">
                    <strong>Top Notes (0–20 mins):</strong> Opens with a fresh
                    burst of mint and lavender — classic Le Male territory — but
                    instantly enveloped by a warm, syrupy honey sweetness. The
                    mint is smooth, not sharp, and the lavender feels richer and
                    more rounded than before.
                  </li>
                  <li role="listitem">
                    <strong>Heart Notes (20 mins – 4 hours):</strong> As the
                    freshness fades, the vanilla and tonka bean take center
                    stage, creating a luxurious, creamy heart that’s equal parts
                    sweet and sensual. There are hints of incense-like depth
                    that give it a mature, amber tone.
                  </li>
                  <li role="listitem">
                    <strong>Base Notes (4+ hours):</strong> The dry down is
                    addictive: golden amber, warm woods, and sweet vanilla
                    linger for hours. The combination of honey and tonka creates
                    a smooth, almost edible richness that clings to skin and
                    fabric long after application.
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
                  This is a powerhouse — not quite a nuclear bomb like some
                  clones, but easily among the strongest designer releases of
                  the past few years.
                </Paragraph>
                <Paragraph>
                  <strong>Longevity (9/10):</strong> 10–12 hours on skin with
                  ease. On clothes, it’s detectable the next day. The amber and
                  vanilla base give it excellent staying power.
                </Paragraph>
                <Paragraph>
                  <strong>Projection (8/10):</strong> The first 3 hours are bold
                  and room-filling, then it settles into a warm, seductive scent
                  bubble. It’s the kind of fragrance that draws people in, not
                  pushes them away.
                </Paragraph>
                <Paragraph>
                  <strong>Sillage:</strong> Moderate to strong. It leaves a
                  beautiful, creamy trail that people notice when you walk by —
                  not overwhelming, but definitely present.
                </Paragraph>
                <Paragraph>
                  <strong>Value (8.5/10):</strong> Around $110–130 USD retail,
                  this is premium designer pricing, but the quality and
                  performance justify it. Few mainstream releases feel this
                  well-balanced and luxurious.
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
                  Le Male Elixir is a cool-weather specialist that thrives in
                  intimate settings and nighttime atmospheres:
                </Paragraph>
                <Paragraph>
                  <strong>Perfect For:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Perfect occasions for this fragrance"
                >
                  <li role="listitem">Fall and winter nights</li>
                  <li role="listitem">Date nights or romantic dinners</li>
                  <li role="listitem">Evening events or lounges</li>
                  <li role="listitem">Cool-weather parties and night outs</li>
                  <li role="listitem">
                    Special occasions when you want to stand out
                  </li>
                </TimeAndOccasionsList>
                <br />
                <Paragraph>
                  <strong>Avoid Wearing:</strong>
                </Paragraph>
                <TimeAndOccasionsList
                  role="list"
                  aria-label="Occasions to avoid for this fragrance"
                >
                  <li role="listitem">Hot summer days</li>
                  <li role="listitem">Gym or office environments</li>
                  <li role="listitem">Formal business meetings</li>
                  <li role="listitem">Anywhere requiring subtlety</li>
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
                  Le Male Elixir feels bold, sensual, and confident. It’s ideal
                  for those who love sweet, amber-based fragrances but want
                  something refined and modern.
                </Paragraph>
                <Paragraph>
                  <strong>The Ideal Wearer:</strong> Late 20s to 40s, stylish,
                  confident, and a bit mysterious. You like your fragrances to
                  make a statement but not scream for attention. You appreciate
                  luxury and depth without going niche.
                </Paragraph>
                <Paragraph>
                  Pair this with: black or dark clothing, tailored outerwear,
                  suede or leather jackets. Works beautifully with cool-weather
                  layering and nighttime style.
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
                  This fragrance is a certified compliment magnet. It draws
                  admiration for being sweet, sexy, and smooth without smelling
                  cheap or synthetic. Women love it — it’s warm, inviting, and
                  addictive.
                </Paragraph>
                <Paragraph>
                  That said, some people may find it a bit too sweet or heavy,
                  especially in warm weather. If you prefer fresh or
                  minimalistic scents, this may be too rich for you.
                </Paragraph>
                <Paragraph>
                  <strong>Spray advice:</strong> 2–3 sprays max. It’s strong
                  enough to last all night, and overspraying can make it cloying
                  indoors.
                </Paragraph>
              </ParagraphWrapper>

              <SectionTitle
                $leftAligned
                $marginBottom="1.2rem"
                as="h2"
                id="le-male-evolution"
              >
                The Le Male Evolution
              </SectionTitle>
              <ParagraphWrapper>
                <Paragraph>
                  Compared to previous flankers, Le Male Elixir feels like the
                  perfect balance between the sweetness of Ultra Male and the
                  smooth sophistication of Le Beau Le Parfum. It’s richer and
                  more elegant, with an amber-vanilla depth that gives it a
                  niche-like feel.
                </Paragraph>
                <Paragraph>
                  It’s safe to say this is the modern pinnacle of the Le Male
                  line — and arguably one of Jean Paul Gaultier’s best designer
                  releases in years.
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
                  <strong>Is Le Male Elixir worth it?</strong> Absolutely. This
                  is a masterfully done flanker that feels both nostalgic and
                  modern, seductive yet sophisticated. It’s designer perfumery
                  done right.
                </Paragraph>
                <Paragraph>
                  <strong>Who should buy it:</strong> Lovers of sweet
                  amber-vanilla fragrances who want depth and power. Fans of
                  Ultra Male looking for a more mature, luxurious upgrade.
                  Anyone wanting a guaranteed compliment getter for cold
                  weather.
                </Paragraph>
                <Paragraph>
                  <strong>Who shouldn’t buy it:</strong> Those who dislike sweet
                  scents, prefer fresh or minimalist styles, or live in hot
                  climates.
                </Paragraph>
                <Paragraph>
                  <strong>My Rating: 4.7/5</strong> – Nearly perfect.
                  Beautifully balanced, long-lasting, and deeply sensual. It’s
                  everything you want from a modern evening fragrance.
                </Paragraph>
              </ParagraphWrapper>
            </ReviewSection>
          </PageWrapperInner>
        </PageWrapper>
      </main>
    </>
  );
};

export default JPGLeMaleElixirReview;
