import { getFragranceBySlug } from "../../../utils/fragranceUtils";
import { Navigate } from "react-router-dom";
import {
  PageWrapper,
  IntroSection,
  ReviewSection,
  SectionTitle,
  Paragraph,
  NotesList,
} from "./ArmafClubDeNuitMan.styled";
import { FragranceHeader } from "../../../components/FragranceReviews/FragranceHeader";
import SummarySection from "../../../components/SummarySection/SummarySection";

const ArmafClubDeNuitManReview: React.FC = () => {
  const fragrance = getFragranceBySlug("armaf-club-de-nuit-man");

  if (!fragrance) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      {/* AUTOMATED HEADER - Uses data from fragrances.ts */}
      <FragranceHeader fragrance={fragrance} bottleImageSize="xlarge" />
      <SummarySection fragranticaUrl={fragrance.fragranticaUrl} />
      <IntroSection>
        <Paragraph>
          <strong>Armaf Club de Nuit Man</strong> is the often-overlooked gem in
          Armaf's lineup that brilliantly captures the Paco Rabanne 1 Million
          DNA at a fraction of the price. While everyone talks about CDNIM as an
          Aventus clone, this fragrance proves Armaf understands more than just
          Creed dupes—they can nail the sweet, spicy, attention-grabbing
          designer DNA too.
        </Paragraph>
        <Paragraph>
          After testing this extensively as a budget-friendly alternative to 1
          Million, here's my honest take on whether this underrated clone
          deserves more recognition in the fragrance community.
        </Paragraph>
      </IntroSection>

      {/* MANUAL DETAILED REVIEW */}
      <ReviewSection>
        <SectionTitle>Fragrance Overview</SectionTitle>
        <Paragraph>
          Club de Nuit Man is a sweet, amber, spicy fragrance that follows the
          same successful blueprint as 1 Million—loud, confident, and designed
          to get compliments. It's that familiar bubblegum-leather-spice
          combination that made 1 Million a club legend, but with Armaf's
          signature nuclear performance at a budget price point.
        </Paragraph>
        <Paragraph>
          The scent opens with that recognizable sweet sparkle but maintains a
          slightly more synthetic edge than the original. However, given the
          massive price difference, most people won't notice or care once they
          experience the performance you get for under $30.
        </Paragraph>

        <SectionTitle>Note Breakdown - My Experience</SectionTitle>
        <Paragraph>
          The note structure closely mirrors 1 Million, with some subtle
          variations in the blending:
        </Paragraph>

        <NotesList>
          <li>
            <strong>Top Notes (0-20 mins):</strong> Opens with a bright,
            slightly synthetic citrus blast—think blood orange and mint but with
            that distinctive bubblegum sweetness that 1 Million made famous.
            It's immediately recognizable and attention-grabbing, though
            slightly sharper than the original.
          </li>
          <li>
            <strong>Heart Notes (20 mins - 4 hours):</strong> The heart is where
            the spice comes through. Cinnamon and rose blend with that leather
            accord that gives it that "money" vibe. The rose is subtle but adds
            sophistication, while the spice keeps it masculine and intriguing.
          </li>
          <li>
            <strong>Base Notes (4+ hours):</strong> The dry down settles into a
            warm, amber and patchouli base with that signature sweetness
            lingering throughout. It's less complex than 1 Million but maintains
            the same overall vibe. The base lasts incredibly well and becomes
            quite addictive.
          </li>
        </NotesList>

        <SectionTitle>Performance Metrics</SectionTitle>
        <Paragraph>
          This is where Armaf consistently delivers unbelievable value:
        </Paragraph>
        <Paragraph>
          <strong>Longevity (9/10):</strong> Absolutely nuclear. 10-12 hours on
          skin easily, and I've detected it on clothes 2 days later. For a $25
          fragrance, this performance is almost comical. It outlasts many
          fragrances costing 5x more.
        </Paragraph>
        <Paragraph>
          <strong>Projection (8/10):</strong> Massive projection for the first
          3-4 hours. This is not a shy fragrance—it will fill a room. After the
          initial blast, it settles into a strong 3-4 foot bubble that lasts for
          hours before becoming a skin scent.
        </Paragraph>
        <Paragraph>
          <strong>Sillage:</strong> Heavy and trail-leaving. You will be noticed
          wearing this. 2-3 sprays is plenty—any more and you risk becoming
          "that guy" who gasses out entire spaces. Office wear requires extreme
          caution.
        </Paragraph>
        <Paragraph>
          <strong>Value (10/10):</strong> At $25-30, this is arguably one of the
          best value propositions in cloning. You're getting 85-90% of the 1
          Million experience with better longevity than current 1 Million
          batches. The price-to-performance ratio is insane.
        </Paragraph>

        <SectionTitle>Best Time & Occasions</SectionTitle>
        <Paragraph>
          Like 1 Million, this is a cold-weather nighttime specialist:
        </Paragraph>
        <Paragraph>
          <strong>Perfect For:</strong>
        </Paragraph>
        <ul>
          <li>Fall and winter evening events</li>
          <li>Clubbing and party environments</li>
          <li>Date nights in cool weather</li>
          <li>When you want maximum compliments</li>
          <li>Younger social gatherings</li>
        </ul>
        <br />
        <Paragraph>
          <strong>Avoid Wearing:</strong>
        </Paragraph>
        <ul>
          <li>Office settings (too loud and distracting)</li>
          <li>Hot summer days (will become cloying)</li>
          <li>Formal business meetings</li>
          <li>Close quarters with limited ventilation</li>
          <li>If you prefer subtle, sophisticated scents</li>
        </ul>

        <SectionTitle>Who Should Wear It</SectionTitle>
        <Paragraph>
          This fragrance targets the same demographic as 1 Million—young,
          confident, and social:
        </Paragraph>
        <Paragraph>
          <strong>The Ideal Wearer:</strong> You're 18-30, you go out regularly,
          and you want a fragrance that gets noticed. You're not afraid to be
          the center of attention and you appreciate good value. You might be a
          student or young professional who wants designer-level presence on a
          budget.
        </Paragraph>
        <Paragraph>
          Pair this with: night-out attire—dark jeans, fitted shirts, leather
          jackets, or stylish streetwear. This is for when you're trying to make
          an impression, not for when you're trying to blend in.
        </Paragraph>

        <SectionTitle>Reactions & Subjectivity</SectionTitle>
        <Paragraph>
          The compliment factor is high with this one. It hits that sweet spot
          (literally) that mass audiences love. I've gotten multiple "you smell
          good" comments every time I've worn it out at night. Friends have
          asked what I'm wearing, then been shocked at the price.
        </Paragraph>
        <Paragraph>
          That said, it's not for everyone. The sweetness can be overwhelming
          for some, and the synthetic opening might bother fragrance snobs. But
          for the average person you'll encounter at bars or parties, it's a
          crowd-pleaser through and through.
        </Paragraph>
        <Paragraph>
          <strong>Spray advice:</strong> Start with 2 sprays MAX. I made the
          mistake of doing 4 sprays once and had to change my shirt—it was that
          potent. This stuff is nuclear, so respect the power.
        </Paragraph>

        <SectionTitle>The Clone Comparison</SectionTitle>
        <Paragraph>
          How does it stack up against 1 Million? About 85-90% similar. The
          opening is slightly more synthetic and harsh, but the dry down is
          remarkably close. The performance is actually better than current 1
          Million formulations, which is saying something.
        </Paragraph>
        <Paragraph>
          For $25 vs $100+, most people would be hard-pressed to justify the
          original. Unless you're a die-hard 1 Million fan who can't stand the
          synthetic edge, Club de Nuit Man delivers the same experience for a
          quarter of the price with better longevity.
        </Paragraph>

        <SectionTitle>Final Verdict</SectionTitle>
        <Paragraph>
          <strong>Is Armaf Club de Nuit Man worth it?</strong> Absolutely,
          especially if you're young and on a budget. This is one of the best
          "bang for your buck" fragrances in the entire clone market.
        </Paragraph>
        <Paragraph>
          <strong>Who should buy it:</strong> If you love the 1 Million DNA but
          don't want to pay designer prices. If you're new to fragrances and
          want something that performs incredibly well for very little money. If
          you're a compliment chaser who wants maximum impact for minimal
          investment.
        </Paragraph>
        <Paragraph>
          <strong>Who shouldn't buy it:</strong> If you already own and love 1
          Million. If you hate sweet, loud fragrances. If you need something
          office-appropriate or versatile. If you're over 35 and want something
          more mature and sophisticated.
        </Paragraph>
        <Paragraph>
          <strong>My Rating: 4/5</strong> - Points deducted for the synthetic
          opening and lack of versatility. But for what it aims to be—a budget 1
          Million clone with nuclear performance—it's incredibly successful and
          arguably one of Armaf's most underrated releases.
        </Paragraph>
      </ReviewSection>

      {/* AUTOMATED AI TOOLS - Uses fragrance data */}
      {/* <AITools fragrance={fragrance} /> */}
    </PageWrapper>
  );
};
export default ArmafClubDeNuitManReview;
