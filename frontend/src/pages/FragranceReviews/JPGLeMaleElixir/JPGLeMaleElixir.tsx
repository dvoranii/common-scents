import {
  getFragranceBySlug,
  getFragranceCategories,
  getFragranceOccasions,
} from "../../../utils/fragranceUtils";
import { Navigate } from "react-router-dom";
import {
  PageWrapper,
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
import { PerfumersDisplay } from "../../../components/PerfumersDisplay/PerfumersDisplay";
import SummarySection from "../../../components/SummarySection/SummarySection";
import { MainTitle, SectionTitle } from "../../../styles/CommonStyles";

const JPGLeMaleElixirReview: React.FC = () => {
  const fragrance = getFragranceBySlug("jpg-le-male-elixir");

  if (!fragrance) {
    return <Navigate to="/" replace />;
  }

  const categoryData = getFragranceCategories(fragrance.categorySlugs);
  const occasionData = getFragranceOccasions(fragrance.occasion!);

  return (
    <PageWrapper>
      <FragranceHeader fragrance={fragrance} bottleImageSize="xlarge" />
      <PerfumersDisplay perfumers={fragrance.perfumers} />
      <SummarySection fragranticaUrl={fragrance.fragranticaUrl} />

      <CategoryAndOccasionWrapper>
        <CategoryAndOccasionWrapperInner>
          <ScentAndOccasionTitle>Scent Categories</ScentAndOccasionTitle>
          <ParagraphWrapper>
            <AssetLinkGrid items={categoryData} basePath="/categories" />
          </ParagraphWrapper>
        </CategoryAndOccasionWrapperInner>

        <CategoryAndOccasionWrapperInner>
          <ScentAndOccasionTitle>Best Occasions</ScentAndOccasionTitle>
          <ParagraphWrapper>
            <AssetLinkGrid items={occasionData} basePath="/occasions" />
          </ParagraphWrapper>
        </CategoryAndOccasionWrapperInner>
      </CategoryAndOccasionWrapper>

      <IntroSection>
        <MainTitle>Let's Review</MainTitle>
        <br />
        <ParagraphWrapper>
          <Paragraph>
            <strong>Jean Paul Gaultier Le Male Elixir</strong> is the bold and
            intoxicating evolution of the iconic Le Male DNA. Released in 2023,
            this flanker dials up the warmth, sweetness, and sensuality,
            creating one of the richest and most seductive fragrances in the Le
            Male line. It’s smoother, darker, and more mature than the original
            — a full-bodied elixir designed for nights that turn into mornings.
          </Paragraph>
          <Paragraph>
            After multiple wears during cool Toronto evenings and nights out,
            here’s my take on why Le Male Elixir might just be the best Le Male
            release since the original — and whether it deserves the hype.
          </Paragraph>
        </ParagraphWrapper>
      </IntroSection>

      <ReviewSection>
        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Fragrance Overview
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            Le Male Elixir stays true to its roots but adds a luxurious twist.
            The vanilla and amber are creamy and enveloping, balanced by mint,
            lavender, and honey. It’s seductive and undeniably modern — think
            the comforting sweetness of Le Male, but with an extra layer of
            depth, warmth, and refinement.
          </Paragraph>
          <Paragraph>
            This is not a fresh barbershop fougère like the 1995 original — it’s
            a darker, more resinous experience meant for cooler nights and close
            encounters. It’s “grown-up Le Male,” without losing the signature
            DNA fans love.
          </Paragraph>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Note Breakdown - My Experience
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            Officially, the note structure is minimal, but the scent feels rich
            and multi-layered. Here’s how it evolves on skin:
          </Paragraph>

          <NotesList>
            <li>
              <strong>Top Notes (0–20 mins):</strong> Opens with a fresh burst
              of mint and lavender — classic Le Male territory — but instantly
              enveloped by a warm, syrupy honey sweetness. The mint is smooth,
              not sharp, and the lavender feels richer and more rounded than
              before.
            </li>
            <li>
              <strong>Heart Notes (20 mins – 4 hours):</strong> As the freshness
              fades, the vanilla and tonka bean take center stage, creating a
              luxurious, creamy heart that’s equal parts sweet and sensual.
              There are hints of incense-like depth that give it a mature, amber
              tone.
            </li>
            <li>
              <strong>Base Notes (4+ hours):</strong> The dry down is addictive:
              golden amber, warm woods, and sweet vanilla linger for hours. The
              combination of honey and tonka creates a smooth, almost edible
              richness that clings to skin and fabric long after application.
            </li>
          </NotesList>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Performance Metrics
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            This is a powerhouse — not quite a nuclear bomb like some clones,
            but easily among the strongest designer releases of the past few
            years.
          </Paragraph>
          <Paragraph>
            <strong>Longevity (9/10):</strong> 10–12 hours on skin with ease. On
            clothes, it’s detectable the next day. The amber and vanilla base
            give it excellent staying power.
          </Paragraph>
          <Paragraph>
            <strong>Projection (8/10):</strong> The first 3 hours are bold and
            room-filling, then it settles into a warm, seductive scent bubble.
            It’s the kind of fragrance that draws people in, not pushes them
            away.
          </Paragraph>
          <Paragraph>
            <strong>Sillage:</strong> Moderate to strong. It leaves a beautiful,
            creamy trail that people notice when you walk by — not overwhelming,
            but definitely present.
          </Paragraph>
          <Paragraph>
            <strong>Value (8.5/10):</strong> Around $110–130 USD retail, this is
            premium designer pricing, but the quality and performance justify
            it. Few mainstream releases feel this well-balanced and luxurious.
          </Paragraph>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Best Time & Occasions
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            Le Male Elixir is a cool-weather specialist that thrives in intimate
            settings and nighttime atmospheres:
          </Paragraph>
          <Paragraph>
            <strong>Perfect For:</strong>
          </Paragraph>
          <TimeAndOccasionsList>
            <li>Fall and winter nights</li>
            <li>Date nights or romantic dinners</li>
            <li>Evening events or lounges</li>
            <li>Cool-weather parties and night outs</li>
            <li>Special occasions when you want to stand out</li>
          </TimeAndOccasionsList>
          <br />
          <Paragraph>
            <strong>Avoid Wearing:</strong>
          </Paragraph>
          <TimeAndOccasionsList>
            <li>Hot summer days</li>
            <li>Gym or office environments</li>
            <li>Formal business meetings</li>
            <li>Anywhere requiring subtlety</li>
          </TimeAndOccasionsList>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Who Should Wear It
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            Le Male Elixir feels bold, sensual, and confident. It’s ideal for
            those who love sweet, amber-based fragrances but want something
            refined and modern.
          </Paragraph>
          <Paragraph>
            <strong>The Ideal Wearer:</strong> Late 20s to 40s, stylish,
            confident, and a bit mysterious. You like your fragrances to make a
            statement but not scream for attention. You appreciate luxury and
            depth without going niche.
          </Paragraph>
          <Paragraph>
            Pair this with: black or dark clothing, tailored outerwear, suede or
            leather jackets. Works beautifully with cool-weather layering and
            nighttime style.
          </Paragraph>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Reactions & Subjectivity
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            This fragrance is a certified compliment magnet. It draws admiration
            for being sweet, sexy, and smooth without smelling cheap or
            synthetic. Women love it — it’s warm, inviting, and addictive.
          </Paragraph>
          <Paragraph>
            That said, some people may find it a bit too sweet or heavy,
            especially in warm weather. If you prefer fresh or minimalistic
            scents, this may be too rich for you.
          </Paragraph>
          <Paragraph>
            <strong>Spray advice:</strong> 2–3 sprays max. It’s strong enough to
            last all night, and overspraying can make it cloying indoors.
          </Paragraph>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          The Le Male Evolution
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            Compared to previous flankers, Le Male Elixir feels like the perfect
            balance between the sweetness of Ultra Male and the smooth
            sophistication of Le Beau Le Parfum. It’s richer and more elegant,
            with an amber-vanilla depth that gives it a niche-like feel.
          </Paragraph>
          <Paragraph>
            It’s safe to say this is the modern pinnacle of the Le Male line —
            and arguably one of Jean Paul Gaultier’s best designer releases in
            years.
          </Paragraph>
        </ParagraphWrapper>

        <SectionTitle $leftAligned $marginBottom="1.2rem">
          Final Verdict
        </SectionTitle>
        <ParagraphWrapper>
          <Paragraph>
            <strong>Is Le Male Elixir worth it?</strong> Absolutely. This is a
            masterfully done flanker that feels both nostalgic and modern,
            seductive yet sophisticated. It’s designer perfumery done right.
          </Paragraph>
          <Paragraph>
            <strong>Who should buy it:</strong> Lovers of sweet amber-vanilla
            fragrances who want depth and power. Fans of Ultra Male looking for
            a more mature, luxurious upgrade. Anyone wanting a guaranteed
            compliment getter for cold weather.
          </Paragraph>
          <Paragraph>
            <strong>Who shouldn’t buy it:</strong> Those who dislike sweet
            scents, prefer fresh or minimalist styles, or live in hot climates.
          </Paragraph>
          <Paragraph>
            <strong>My Rating: 4.7/5</strong> – Nearly perfect. Beautifully
            balanced, long-lasting, and deeply sensual. It’s everything you want
            from a modern evening fragrance.
          </Paragraph>
        </ParagraphWrapper>
      </ReviewSection>
    </PageWrapper>
  );
};

export default JPGLeMaleElixirReview;
