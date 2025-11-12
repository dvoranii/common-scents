import {
  SecondaryTagline,
  ContentSection1,
  ContentSection2,
  AboutImg,
  AboutText,
  ImgWrapper,
  TextWrapper,
  MissionTextWrapper,
  MissionText,
  ContentSection3,
  DifferenceCard,
  DifferenceDescription,
  DifferenceGrid,
  DifferenceTitle,
  ContentSection1Inner,
  ContentSection2Inner,
  ContentSection3Inner,
  DifferenceLink,
  CTASection,
  CTAText,
  CTATitle,
  CTASectionInner,
  ButtonGroup,
  PrimaryButton,
  SecondaryLinkButton,
} from "./About.styled";

import AboutIntroImgLandscape from "../../assets/About/about-stock-img.jpg";
import AboutIntroImgPortrait from "../../assets/About/about-stock-img.png";
import CommonScentsLogo from "../../assets/cs-bulb.png";

import {
  SectionTitle,
  MainTitle,
  TitleContainer,
  Tagline,
  LogoContainer,
  HeroSection,
  HeroContent,
} from "../../styles/CommonStyles";

import { usePositionAwareButton } from "../../hooks/usePositionAwareButton";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const linkRef = usePositionAwareButton<HTMLAnchorElement>();
  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle $center>About Common Scents</MainTitle>
            <Tagline>Making Scents Make Sense</Tagline>
            <SecondaryTagline>
              Exploring the art, science, and storytelling behind fragrances
              &mdash; one bottle at a time.
            </SecondaryTagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>
      <ContentSection1>
        <ContentSection1Inner>
          <TextWrapper>
            <SectionTitle $leftAligned $marginBottom="1.2rem">
              Our Story
            </SectionTitle>
            <AboutText>
              Common Scents began with a simple realization: the world of
              fragrance shouldn't feel gatekept or overwhelming.
              <br />
              <br />
              What started as a personal hobby—collecting fragrances, testing
              countless bottles, and getting lost in the nuances of
              perfumery—evolved into something bigger. I found myself frustrated
              by cluttered fragrance databases, surface-level reviews, and a
              lack of accessible education for newcomers. The fragrance
              community deserved better tools, clearer information, and a space
              that felt welcoming rather than intimidating.
              <br />
              <br />
              So I built Common Scents: a platform designed to demystify
              fragrance through honest reviews, practical guides, and
              educational deep-dives into perfumery. Whether you're buying your
              first bottle or you're a seasoned collector, this is a space for
              you.
            </AboutText>
          </TextWrapper>
          <ImgWrapper>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={AboutIntroImgLandscape}
              />
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet={AboutIntroImgPortrait}
              />
              <source
                media="(max-width: 768px)"
                srcSet={AboutIntroImgLandscape}
              />
              <AboutImg
                src={AboutIntroImgLandscape}
                alt="Common Scents fragrance collection"
              />
            </picture>
          </ImgWrapper>
        </ContentSection1Inner>
      </ContentSection1>

      <ContentSection2>
        <ContentSection2Inner>
          <SectionTitle $marginBottom="2rem">
            What Makes Us Different
          </SectionTitle>
          <DifferenceGrid>
            <DifferenceCard>
              <DifferenceTitle>Clean, Intuitive Design</DifferenceTitle>
              <DifferenceDescription>
                We've taken everything you love about traditional fragrance
                databases—accord breakdowns, note pyramids, perfumer info,
                ratings—and presented it in a format that's actually enjoyable
                to use. No clutter, no confusion, just the information you need
                to make informed decisions.
              </DifferenceDescription>
            </DifferenceCard>

            <DifferenceCard>
              <DifferenceTitle>AI-Powered Community Insights</DifferenceTitle>
              <DifferenceDescription>
                Every fragrance page includes our unique AI summary tool. Choose
                to analyze 10, 25, or 50 user reviews from Fragrantica, and get
                an instant, comprehensive summary of what the community thinks.
                It's like reading hundreds of opinions in minutes, helping you
                understand the full picture before you buy.
              </DifferenceDescription>
              <DifferenceLink
                to={"/fragrance-reviews/creed-viking-cologne#community-reviews"}
              >
                Try it out
              </DifferenceLink>
            </DifferenceCard>

            <DifferenceCard>
              <DifferenceTitle>Honest, In-Depth Reviews</DifferenceTitle>
              <DifferenceDescription>
                My reviews go beyond marketing copy and surface impressions. I
                test fragrances across seasons, occasions, and real-world
                scenarios—then break down performance, versatility, value, and
                who should actually wear them. No sponsorships, no fluff, just
                straightforward perspectives from someone who genuinely loves
                this craft.
              </DifferenceDescription>
              <DifferenceLink to={"/fragrance-reviews"}>
                See Reviews
              </DifferenceLink>
            </DifferenceCard>

            <DifferenceCard>
              <DifferenceTitle>Educational Resources</DifferenceTitle>
              <DifferenceDescription>
                Fragrance can feel complex, but it doesn't have to be. Through
                our Tips & Guides and Common Scents Academy sections, we're
                building a library of practical advice and historical
                context—from building your first signature wardrobe to
                understanding the evolution of modern perfumery. This is
                fragrance education made accessible.
              </DifferenceDescription>
              <DifferenceLink to={"/academy"}>Read More</DifferenceLink>
            </DifferenceCard>
          </DifferenceGrid>
        </ContentSection2Inner>
      </ContentSection2>
      <ContentSection3>
        <ContentSection3Inner>
          <SectionTitle $marginBottom="1.2rem" $leftAligned>
            Our Mission
          </SectionTitle>
          <MissionTextWrapper>
            <MissionText>
              To make fragrance approachable, insightful, and enjoyable for
              everyone—from the curious beginner to the passionate enthusiast.
              <br />
              <br />
              We believe that finding your signature scent should be exciting,
              not exhausting. That understanding fragrance shouldn't require a
              chemistry degree. And that the fragrance community thrives when
              knowledge is shared openly and honestly.
              <br />
              <br />
              Common Scents is here to guide your fragrance journey with
              clarity, authenticity, and a genuine passion for the art of
              perfumery.
            </MissionText>
          </MissionTextWrapper>
        </ContentSection3Inner>
      </ContentSection3>

      <CTASection>
        <CTASectionInner>
          <CTATitle>Ready to Start Your Fragrance Journey?</CTATitle>
          <CTAText>
            Explore our collection of in-depth reviews, practical guides, and
            educational resources.
          </CTAText>
          <ButtonGroup>
            <Link to="/fragrance-reviews">
              <PrimaryButton>Browse Fragrance Reviews</PrimaryButton>
            </Link>

            <SecondaryLinkButton to="/guides" ref={linkRef}>
              Read Tips & Guides
              <span></span>
            </SecondaryLinkButton>
          </ButtonGroup>
        </CTASectionInner>
      </CTASection>
    </>
  );
};

export default About;
