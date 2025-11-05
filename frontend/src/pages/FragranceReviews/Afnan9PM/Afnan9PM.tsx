import { getFragranceBySlug } from "../../../utils/fragranceUtils";
import { Navigate } from "react-router-dom";
import {
  PageWrapper,
  IntroSection,
  ReviewSection,
  SectionTitle,
  Paragraph,
  NotesList,
} from "./Afnan9PM.styled";
import { FragranceHeader } from "../../../components/FragranceReviews/FragranceHeader";
import { PerfumersDisplay } from "../../../components/PerfumersDisplay/PerfumersDisplay";

const Afnan9PMReview: React.FC = () => {
  const fragrance = getFragranceBySlug("afnan-9pm");

  if (!fragrance) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      <FragranceHeader fragrance={fragrance} />
      <PerfumersDisplay perfumers={fragrance.perfumers} />

      <IntroSection>
        <Paragraph>
          <strong>Afnan 9PM</strong> is a sophisticated evening scent that
          punches way above its $35 price point. Released in 2020, this EDP has
          quickly become one of the most talked-about fragrances in the budget
          category. Often called the best Jean Paul Gaultier Ultra Male clone,
          Afnan 9PM delivers incredible performance and a crowd-pleasing scent
          profile that rivals fragrances 4-5x its price.
        </Paragraph>
        <Paragraph>
          After wearing this extensively through Toronto fall and winter nights,
          here's my brutally honest take on whether this fragrance lives up to
          the hype.
        </Paragraph>
      </IntroSection>

      {/* MANUAL DETAILED REVIEW */}
      <ReviewSection>
        <SectionTitle>Fragrance Overview</SectionTitle>
        <Paragraph>
          Afnan 9PM is a sweet, spicy oriental gourmand that's designed to turn
          heads. This isn't a subtle office scent—this is a "look at me"
          fragrance for evening wear. The DNA is clearly inspired by Ultra Male,
          but 9PM has its own personality with slightly more depth and
          complexity than you'd expect at this price point.
        </Paragraph>
        <Paragraph>
          The scent profile leans heavily into the sweet and spicy territory,
          making it perfect for fall/winter date nights, clubbing, or any
          occasion where you want to make an impression. If you're the type who
          thinks fragrances should be "smelled, not seen," this isn't for you.
          9PM is loud, proud, and unapologetic.
        </Paragraph>

        <SectionTitle>Note Breakdown - My Experience</SectionTitle>
        <Paragraph>
          On paper, the notes are relatively simple, but the execution is what
          makes this fragrance special:
        </Paragraph>

        <NotesList>
          <li>
            <strong>Top Notes (0-15 mins):</strong> Opens with a crisp apple
            note paired with warm cinnamon. The apple is sweet but not
            candy-like, and the cinnamon adds just enough spice to keep it
            interesting. This opening is immediately attention-grabbing—people
            will smell you before they see you.
          </li>
          <li>
            <strong>Heart Notes (15 mins - 3 hours):</strong> The orange blossom
            and lavender in the heart add a floral sophistication that elevates
            this above typical sweet fragrances. The lavender prevents it from
            being cloying, while the orange blossom adds a creamy, slightly
            powdery quality.
          </li>
          <li>
            <strong>Base Notes (3+ hours):</strong> The dry down is where 9PM
            really shines. Vanilla and tonka bean create a warm, sweet base
            that's absolutely addictive. There's a touch of earthy patchouli
            that adds depth and prevents it from being a one-dimensional sweet
            bomb. The base is smooth, comforting, and lasts for hours.
          </li>
        </NotesList>

        <SectionTitle>Performance Metrics</SectionTitle>
        <Paragraph>
          This is where Afnan 9PM absolutely destroys fragrances 3-4x its price:
        </Paragraph>
        <Paragraph>
          <strong>Longevity (8/10):</strong> Easily 8-10 hours on my skin, and I
          can still smell it on my clothes the next day. For a $35 fragrance,
          this is nuclear performance. I've had designer fragrances at $150+
          that don't last this long.
        </Paragraph>
        <Paragraph>
          <strong>Projection (7/10):</strong> Strong for the first 2-3 hours—
          people will smell you from across the room. After that, it settles
          into a pleasant 2-3 foot bubble around you. By hour 6, it's more of a
          skin scent, but it's still detectable.
        </Paragraph>
        <Paragraph>
          <strong>Sillage:</strong> Heavy. You will leave a trail. Don't wear
          this to the office unless you want HR calling you in for a "fragrance
          conversation." 3-4 sprays is MORE than enough. Seriously, start with 2
          sprays and work your way up.
        </Paragraph>
        <Paragraph>
          <strong>Value (10/10):</strong> At $35, this is an absolute steal.
          Even if you don't love the scent, the performance alone justifies the
          price. For reference, Ultra Male costs $120-150 and doesn't project or
          last significantly better.
        </Paragraph>

        <SectionTitle>Best Time & Occasions</SectionTitle>
        <Paragraph>
          This is NOT an all-season, all-occasion fragrance. Here's when to wear
          it:
        </Paragraph>
        <Paragraph>
          <strong>Perfect For:</strong>
        </Paragraph>
        <ul>
          <li>Fall/Winter date nights (10/10 fit)</li>
          <li>Evening events or parties</li>
          <li>Clubbing or bars</li>
          <li>Going out with friends in cold weather</li>
          <li>When you want maximum attention</li>
        </ul>
        <Paragraph>
          <strong>Don't Wear It:</strong>
        </Paragraph>
        <ul>
          <li>To the office (unless you work alone)</li>
          <li>In hot weather (it will be suffocating)</li>
          <li>During the day (it's too heavy)</li>
          <li>To formal events (too youthful and loud)</li>
          <li>Anywhere with poor ventilation</li>
        </ul>

        <SectionTitle>Who Should Wear It</SectionTitle>
        <Paragraph>
          This fragrance screams confidence and youth. It's perfect for:
        </Paragraph>
        <Paragraph>
          <strong>The Ideal Wearer:</strong> You're 20-35, you like attention,
          you're not afraid to stand out. You wear dark colors, leather jackets,
          and boots. You know how to dress and you're comfortable being noticed.
          You're going out for the night and want to smell memorable.
        </Paragraph>
        <Paragraph>
          Pair this with: dark jeans or black pants, a fitted shirt or sweater,
          leather or suede jacket, and boots or clean sneakers. This is NOT a
          business casual scent—save it for when you're off the clock.
        </Paragraph>

        <SectionTitle>Reactions & Subjectivity</SectionTitle>
        <Paragraph>
          My girlfriend absolutely loves this one. Every time I wear it, I get
          the "you smell really good" comment. Friends have asked what I'm
          wearing multiple times. Random compliments from strangers? Yep,
          happens regularly with this one.
        </Paragraph>
        <Paragraph>
          That said, it's a polarizing scent. Some people think it's too sweet,
          too loud, or too "young." If you're over 40 or prefer understated
          elegance, this probably isn't for you. But if you're in your 20s or
          early 30s and want something that gets noticed, you'll love it.
        </Paragraph>
        <Paragraph>
          <strong>Pro tip:</strong> DO NOT overspray. I cannot stress this
          enough. 2-3 sprays is the absolute maximum. If you're going to be in a
          car with someone, do 1-2 sprays. You don't want to gas people
          out—trust me, I've made this mistake.
        </Paragraph>

        <SectionTitle>The Clone Debate</SectionTitle>
        <Paragraph>
          Yes, this is clearly inspired by Ultra Male. But here's the thing: at
          $35, who cares? For less than the price of a nice dinner, you're
          getting 95% of the Ultra Male experience with arguably better
          longevity. The scent isn't identical—9PM is slightly deeper and less
          synthetic—but it's close enough that most people won't notice the
          difference.
        </Paragraph>
        <Paragraph>
          If you already own Ultra Male and love it, you might find 9PM to be
          redundant. But if you're new to this scent profile or don't want to
          drop $150 on a fragrance, 9PM is the obvious choice.
        </Paragraph>

        <SectionTitle>Final Verdict</SectionTitle>
        <Paragraph>
          <strong>Is Afnan 9PM worth it?</strong> Absolutely, without question.
          At $35, this is one of the best value propositions in the entire
          fragrance world. The performance is exceptional, the scent is
          crowd-pleasing (if you're in the right setting), and the price makes
          it accessible to everyone.
        </Paragraph>
        <Paragraph>
          <strong>Who should buy it:</strong> If you're looking for a
          fall/winter evening scent that performs like a beast and won't break
          the bank, buy this immediately. If you love sweet, spicy fragrances
          and want compliments, buy this. If you're curious about the Ultra Male
          DNA but don't want to commit $150, buy this.
        </Paragraph>
        <Paragraph>
          <strong>Who shouldn't buy it:</strong> If you prefer fresh, clean, or
          subtle fragrances, skip this. If you work in a conservative office and
          need an all-day scent, look elsewhere. If you're over 40 and want
          something age-appropriate, this probably isn't it.
        </Paragraph>
        <Paragraph>
          <strong>My Rating: 4.5/5</strong> - Half a point deducted only because
          it's not versatile enough for everyday wear. But for what it is—a
          fall/winter evening powerhouse—it's nearly perfect.
        </Paragraph>
      </ReviewSection>

      {/* AUTOMATED AI TOOLS - Uses fragrance data */}
      {/* <AITools fragrance={fragrance} /> */}
    </PageWrapper>
  );
};
export default Afnan9PMReview;
