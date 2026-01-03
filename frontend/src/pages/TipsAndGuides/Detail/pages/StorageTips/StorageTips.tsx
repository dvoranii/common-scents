import React from "react";
import GuideWrapper from "../../components/GuideWrapper/GuideWrapper";
import * as S from "../../components/TipsTemplate/TipsTemplate.styled";

const CollectionBuildingGuide: React.FC = () => {
  return (
    <GuideWrapper slug="how-to-build-a-collection">
      <S.Intro>
        Building a fragrance collection is more than just a shopping spree—it’s
        about creating a 4-dimensional aesthetic that matches your fashion, your
        mood, and the occasion. Whether you want to be the "one-bottle guy" or a
        hardcore collector, the goal is informed decision-making over impulse
        buying.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>The 3-Day Decant Rule</S.SectionTitle>
        <S.Paragraph>
          As I mentioned in my Smart Buying Guide, skin chemistry is everything.
          When you’re building a serious collection, stop buying full bottles at
          the mall after a single sniff. **Buy a decant.**{" "}
        </S.Paragraph>
        <S.Paragraph>
          Wear that decant for a full week. Your taste will evolve and adapt
          faster than you think. I hated <strong>JPG Elixir</strong> and
          <strong>Baccarat Rouge 540</strong> at first. Now? They are staples.
          If you are a "picky" personality type, decants are your insurance
          policy. If you’re more open-minded (the type of person who likes
          trying every dish on a menu), you can afford the occasional blind-buy
          thrill, but even then—technical culture beats hype every time.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Ignore the "One-Person" Opinion</S.SectionTitle>
        <S.Paragraph>
          Fragrance is subjective. Never base your collection on a single
          negative comment. I’ve had women tell me{" "}
          <strong>Club De Nuit Intense Man</strong>
          smells like an "old man," while others have literally had their jaws
          drop at how good it smells.
        </S.Paragraph>
        <S.Paragraph>
          My favorite example? I once wore <strong>Creed Viking Cologne</strong>
          at the bar where I worked. I overheard one girl say, "He smells SO
          good," and her friend replied, "Yeah, like a caveman." That is the
          ultimate compliment—fragrance should evoke a character, not just a
          "clean" smell.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>The 1-to-10 Framework</S.SectionTitle>
        <S.Paragraph>
          How many bottles do you actually need? Here is my breakdown for
          curating a collection with purpose:
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <strong>1 Bottle:</strong> The Daily Driver. Your "Identity" scent.
          </S.ListItem>
          <S.ListItem>
            <strong>2 Bottles:</strong> The Day & Night split.
          </S.ListItem>
          <S.ListItem>
            <strong>3 Bottles:</strong> Daily Driver, Date Night, and
            Professional/Formal.
          </S.ListItem>
          <S.ListItem>
            <strong>4-5 Bottles:</strong> The Seasonal Rotation + 1 Signature
            Scent.
          </S.ListItem>
          <S.ListItem>
            <strong>8 Bottles:</strong> The "Dumb Reach" (easy to wear) +
            Day/Night for all 4 seasons.
          </S.ListItem>
          <S.ListItem>
            <strong>9 Bottles:</strong> Add a "Vacation" scent (e.g., Hawas
            Tropical or Le Beau).
          </S.ListItem>
          <S.ListItem>
            <strong>10 Bottles:</strong> The Legacy Scent. Your "Trophy" bottle
            for weddings and major life milestones.
          </S.ListItem>
        </S.List>
        <S.Paragraph>
          <strong>The Pro-Tip:</strong> Anything more than 10 well-curated
          bottles is officially a hobby (or an addiction). If you find yourself
          buying bottles just to have them, you're no longer building a
          wardrobe—you're just collecting glass.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Summary</S.SectionTitle>
        <S.Paragraph>
          Focus on variety and occasion. Use decants to test the waters, trust
          your own nose over a single critic, and aim for a collection that
          feels like a curated museum, not a cluttered warehouse.
        </S.Paragraph>
      </S.Section>
    </GuideWrapper>
  );
};

export default CollectionBuildingGuide;
