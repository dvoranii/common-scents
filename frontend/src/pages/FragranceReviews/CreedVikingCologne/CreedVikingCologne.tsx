import { getFragranceBySlug } from "../../../utils/fragranceUtils";
import { Navigate } from "react-router-dom";
import {
  PageWrapper,
  IntroSection,
  ReviewSection,
  SectionTitle,
  Paragraph,
  NotesList,
} from "./CreedVikingCologne.styled";
import { FragranceHeader } from "../../../components/FragranceReviews/FragranceHeader";
import { PerfumersDisplay } from "../../../components/PerfumersDisplay/PerfumersDisplay";

const CreedVikingCologneReview: React.FC = () => {
  const fragrance = getFragranceBySlug("creed-viking-cologne");

  if (!fragrance) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      {/* AUTOMATED HEADER - Uses data from fragrances.ts */}
      <FragranceHeader fragrance={fragrance} bottleImageSize="medium" />
      <PerfumersDisplay perfumers={fragrance.perfumers} />
      {/* MANUAL INTRO PARAGRAPH */}
      <IntroSection>
        <Paragraph>
          <strong>Creed Viking Cologne</strong> is the refreshing 2022
          reinterpretation of the original Viking, offering a lighter, more
          versatile take on the classic masculine DNA. Where Viking was bold and
          challenging, Viking Cologne is approachable and sophisticated—a modern
          gentleman's fragrance that bridges the gap between classic Creed
          elegance and contemporary freshness.
        </Paragraph>
        <Paragraph>
          After testing this through spring and summer in various settings,
          here's my comprehensive review of whether this premium-priced
          fragrance justifies its cost and deserves a spot in your collection.
        </Paragraph>
      </IntroSection>

      {/* MANUAL DETAILED REVIEW */}
      <ReviewSection>
        <SectionTitle>Fragrance Overview</SectionTitle>
        <Paragraph>
          Viking Cologne is a bright, aromatic fougère that maintains the
          original Viking's sophistication while being significantly more
          wearable. This isn't a complete departure from the original, but
          rather an evolution—taking the core DNA and making it more versatile
          for everyday wear and warmer climates.
        </Paragraph>
        <Paragraph>
          The scent opens with incredible freshness but maintains that distinct
          Creed quality throughout. It's sophisticated enough for the boardroom
          but fresh enough for weekend brunches. If you found the original
          Viking too intense or spicy, this cologne version might be your
          perfect gateway into the house.
        </Paragraph>

        <SectionTitle>Note Breakdown - My Experience</SectionTitle>
        <Paragraph>
          The note pyramid is classic Creed—complex, layered, and expertly
          blended:
        </Paragraph>

        <NotesList>
          <li>
            <strong>Top Notes (0-30 mins):</strong> The opening is an explosion
            of freshness—citrus notes of lemon and bergamot dance with pink
            pepper, creating an immediately uplifting and sophisticated first
            impression. The pink pepper adds just enough spice to keep it
            interesting without being overwhelming.
          </li>
          <li>
            <strong>Heart Notes (30 mins - 4 hours):</strong> As the citrus
            settles, the heart reveals a beautiful aromatic structure. Lavender
            provides classic fougère elegance, while sandalwood begins to emerge
            with its creamy, woody character. This is where the fragrance shows
            its sophistication—it's fresh but never simple.
          </li>
          <li>
            <strong>Base Notes (4+ hours):</strong> The dry down is pure class.
            Sandalwood and ambergris create a creamy, slightly salty foundation
            that's incredibly addictive. There's a subtle muskiness that keeps
            it skin-close and intimate. The base is where you remember you're
            wearing a Creed—it's complex, refined, and lasts beautifully.
          </li>
        </NotesList>

        <SectionTitle>Performance Metrics</SectionTitle>
        <Paragraph>
          For a cologne concentration, the performance is impressive but manages
          expectations appropriately:
        </Paragraph>
        <Paragraph>
          <strong>Longevity (7/10):</strong> 6-8 hours on skin, and I can detect
          it on clothes the next day. It becomes a skin scent after about 5
          hours, but it's still present. For a fresh fragrance, this is above
          average.
        </Paragraph>
        <Paragraph>
          <strong>Projection (6/10):</strong> Moderate projection for the first
          2 hours—noticeable but not overwhelming. It settles into a personal
          bubble that's perfect for professional settings. This isn't a
          room-filler, and that's by design.
        </Paragraph>
        <Paragraph>
          <strong>Sillage:</strong> Moderate and elegant. It leaves a refined
          trail rather than an aggressive one. You can comfortably wear this in
          office settings without worrying about offending colleagues. 4-5
          sprays is the sweet spot.
        </Paragraph>
        <Paragraph>
          <strong>Value (6/10):</strong> At Creed's premium pricing, this is an
          investment. However, for a sophisticated fresh fragrance that works
          year-round and in multiple settings, it justifies its cost for those
          who appreciate the Creed quality and versatility.
        </Paragraph>

        <SectionTitle>Best Time & Occasions</SectionTitle>
        <Paragraph>
          This is one of Creed's most versatile releases in recent years:
        </Paragraph>
        <Paragraph>
          <strong>Perfect For:</strong>
        </Paragraph>
        <ul>
          <li>Spring and summer daytime wear (9/10 fit)</li>
          <li>Office and professional settings</li>
          <li>Date nights and romantic dinners</li>
          <li>Weekend outings and brunches</li>
          <li>Business meetings and formal events</li>
        </ul>
        <br />
        <Paragraph>
          <strong>Less Ideal For:</strong>
        </Paragraph>
        <ul>
          <li>Freezing winter days (might get lost)</li>
          <li>When you want extreme projection</li>
          <li>Club environments (too sophisticated)</li>
          <li>If you're looking for a beast-mode performer</li>
        </ul>

        <SectionTitle>Who Should Wear It</SectionTitle>
        <Paragraph>
          Viking Cologne speaks to the modern gentleman who values
          sophistication over loudness:
        </Paragraph>
        <Paragraph>
          <strong>The Ideal Wearer:</strong> You're 25-45, value quality over
          quantity, and appreciate refined elegance. You're established in your
          career but maintain a contemporary style. You want a fragrance that
          complements your presence rather than announcing it. You appreciate
          the finer things but don't need to shout about it.
        </Paragraph>
        <Paragraph>
          Pair this with: well-tailored business casual wear, crisp
          button-downs, quality knitwear, or sophisticated summer attire. This
          fragrance works with a suit as well as it does with well-fitted chinos
          and a polo.
        </Paragraph>

        <SectionTitle>Reactions & Subjectivity</SectionTitle>
        <Paragraph>
          The reactions to Viking Cologne have been consistently positive but
          subtle. You're more likely to get "you smell nice" comments rather
          than "what are you wearing?" from across the room. It's a fragrance
          that impresses upon closer interaction rather than making a grand
          entrance.
        </Paragraph>
        <Paragraph>
          The scent profile is widely appealing—it's fresh enough to be
          inoffensive but sophisticated enough to stand out from typical fresh
          fragrances. It's unlikely to polarize people, making it a safe choice
          for those who want quality without controversy.
        </Paragraph>
        <Paragraph>
          <strong>Spray routine:</strong> 4-5 sprays total—neck, wrists, and
          clothes. It's hard to overspray this one, making it beginner-friendly
          for those new to niche fragrances.
        </Paragraph>

        <SectionTitle>The Creed Premium</SectionTitle>
        <Paragraph>
          Yes, you're paying for the name, but you're also paying for
          exceptional quality. The ingredients feel premium, the blending is
          masterful, and the overall experience is refined. While there are
          cheaper fresh fragrances, few achieve this level of sophistication
          without becoming boring.
        </Paragraph>
        <Paragraph>
          If you're new to niche fragrances and wondering if the Creed price is
          justified, Viking Cologne is actually one of their better entry
          points. It's versatile, wearable, and demonstrates what makes Creed
          special without being as challenging as some of their other offerings.
        </Paragraph>

        <SectionTitle>Final Verdict</SectionTitle>
        <Paragraph>
          <strong>Is Creed Viking Cologne worth it?</strong> If you have the
          budget and appreciate sophisticated fresh fragrances, absolutely. It
          fills a valuable niche in any collection—a premium fresh scent that
          works for both office and casual wear without compromising on quality.
        </Paragraph>
        <Paragraph>
          <strong>Who should buy it:</strong> If you want a sophisticated,
          versatile fragrance that can be your signature scent across multiple
          seasons and occasions. If you appreciate the Creed house style but
          want something more wearable than Aventus or the original Viking. If
          you're looking for a office-appropriate fragrance that still feels
          special and premium.
        </Paragraph>
        <Paragraph>
          <strong>Who shouldn't buy it:</strong> If you're on a tight budget or
          prefer bold, projecting fragrances. If you already own multiple fresh
          fragrances and don't need another. If you're looking for extreme
          performance or value-for-money scents.
        </Paragraph>
        <Paragraph>
          <strong>My Rating: 8/10</strong> - Points for sophistication,
          versatility, and quality. Points deducted for the premium price and
          moderate performance. However, for what it aims to be—a refined,
          versatile fresh fragrance—it excels beautifully.
        </Paragraph>
      </ReviewSection>

      {/* AUTOMATED AI TOOLS - Uses fragrance data */}
      {/* <AITools fragrance={fragrance} /> */}
    </PageWrapper>
  );
};
export default CreedVikingCologneReview;
