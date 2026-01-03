import React from "react";
import GuideWrapper from "../../components/GuideWrapper/GuideWrapper";
import * as S from "../../components/TipsTemplate/TipsTemplate.styled";

const SmartBuyingGuide: React.FC = () => {
  return (
    <GuideWrapper slug="smart-guide-buying-wearing-fragrances">
      <S.Intro>
        The fragrance hobby is a rabbit hole that often starts with one "nice"
        designer scent and ends with a shelf full of bottles you never actually
        wear. After building a collection of over 70 fragrances, I’ve realized
        that most of us are buying the wrong way. If you want to move from being
        the "guy who smells like the mall" to a truly cultured enthusiast, you
        need to stop falling for the marketing and start understanding the
        science of the drydown.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>The Top Note Trap</S.SectionTitle>
        <S.Paragraph>
          The biggest mistake beginners make is buying a fragrance based on the
          first 10 minutes.{" "}
          <S.Highlight>Top notes are a marketing tool.</S.Highlight> They are
          designed to hook you at the department store counter so you'll head
          straight to the register. In reality, those bright, volatile molecules
          are usually gone in less than an hour.
        </S.Paragraph>
        <S.Paragraph>
          What you are actually buying—the scent people will associate with you
          for the next 6 to 8 hours—is the drydown. As I discuss in my Academy
          post, <strong>"The Art of Blending,"</strong> top notes are really
          just a primer for your olfactory system, setting the stage for the
          actual composition. Never judge a book by its cover, and never judge a
          fragrance by its opening.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>The 3-Day Wear Rule</S.SectionTitle>
        <S.Paragraph>
          You don't truly know a fragrance until you've worn it for at least 3
          to 4 days. Fragrance is dynamic; it reacts to your skin oil chemistry,
          your natural body odor, and your environment.
        </S.Paragraph>
        <S.Paragraph>
          I remember smelling <strong>Hawas Malibu</strong> and{" "}
          <strong>Kobra</strong> in a shop and hating them at first. But after
          living with Malibu for a few days, it became one of my absolute
          favorites. Fragrances are subjective and dependent on your mood—give
          them a "work week" test before committing to a full bottle.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Cheapies vs. Niche: An Objective View</S.SectionTitle>
        <S.Paragraph>
          Blind buying "cheapies" is fine if you can afford the gamble, and
          often we're just impressed by the value for money. However, from a
          technical and cultured perspective, clones rarely match the
          sophistication of the originals. Niche perfumery offers a level of
          artistry and chemical balance that budget scents simply can't
          replicate.
        </S.Paragraph>
        <S.Paragraph>
          It's about having a "cultured" approach rather than just liking a
          specific DNA. Invest in quality when it matters, and use budget
          alternatives for what they are: fun, temporary thrills.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Performance and Etiquette</S.SectionTitle>
        <S.Paragraph>
          Stop obsessing over longevity. If a fragrance smells incredible but
          only lasts four hours, just use a{" "}
          <S.Highlight>travel atomizer.</S.Highlight> This allows you to
          re-apply and enjoy those top notes all over again throughout the day.
        </S.Paragraph>
        <S.Paragraph>
          As for "offending" people—only worry about that in packed environments
          like planes or long car rides. If you're going to a theme park, a
          club, or a party, there is no such thing as over-spraying. I’ve found
          that a bold sillage is one of the best ways to meet people and start
          conversations. If you’re truly worried about the elevator ride, just
          apply your scent once you hit the ground floor.
        </S.Paragraph>
      </S.Section>
    </GuideWrapper>
  );
};

export default SmartBuyingGuide;
