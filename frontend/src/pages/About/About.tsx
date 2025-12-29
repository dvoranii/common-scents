// About.tsx
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
  SecondaryLinkButton,
} from "./About.styled";

import AboutIntroImgLandscape from "/assets/images/About/about-stock-img.jpg";
import AboutIntroImgPortrait from "/assets/images/About/about-stock-img.png";
import CommonScentsLogo from "/assets/images/cs-bulb.webp";

import {
  SectionTitle,
  MainTitle,
  TitleContainer,
  LogoContainer,
  HeroSection,
  HeroContent,
  PrimaryButton,
  ButtonGroup,
} from "../../styles/CommonStyles";

import { usePositionAwareButton } from "../../hooks/usePositionAwareButton";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO"; // Add this import

const About: React.FC = () => {
  const linkRef = usePositionAwareButton<HTMLAnchorElement>();

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Common Scents HQ",
    description:
      "Discover the story behind Common Scents HQ. We make fragrance accessible through honest reviews, AI-powered insights, and educational resources for beginners and experts.",
    url: "https://commonscentshq.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Common Scents HQ",
      description: "Fragrance review and education platform",
      foundingDate: "2023",
      founder: {
        "@type": "Person",
        name: "Common Scents Team",
      },
      knowsAbout: [
        "Fragrance Reviews",
        "Perfume Guides",
        "Cologne Recommendations",
        "Scent Wardrobe",
        "Fragrance Education",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Common Scents HQ",
      logo: {
        "@type": "ImageObject",
        url: "https://commonscentshq.com/logo.png",
      },
    },
  };

  return (
    <>
      <SEO
        title="About Common Scents HQ | Fragrance Reviews & Guides"
        description="Discover the story behind Common Scents HQ. We make fragrance accessible through honest reviews, AI-powered insights, and educational resources for beginners and experts."
        canonical="https://commonscentshq.com/about"
        image="https://commonscentshq.com/og-about.jpg"
        structuredData={aboutStructuredData}
      />

      <article>
        <HeroSection role="banner" as="section">
          <HeroContent $padding>
            <LogoContainer>
              <img
                src={CommonScentsLogo}
                alt="Common Scents - Fragrance Demystified"
                width="250"
                height="334"
                loading="lazy"
                decoding="async"
                fetchPriority="high"
              />
            </LogoContainer>

            <header>
              <TitleContainer>
                <MainTitle $center>About Common Scents</MainTitle>
                <SecondaryTagline role="doc-subtitle">
                  Exploring the art, science, and storytelling behind fragrances
                  &mdash; one bottle at a time.
                </SecondaryTagline>
              </TitleContainer>
            </header>
          </HeroContent>
        </HeroSection>

        <ContentSection1 aria-labelledby="our-story">
          <ContentSection1Inner>
            <TextWrapper>
              <SectionTitle $leftAligned $marginBottom="1.2rem" id="our-story">
                Our Story
              </SectionTitle>
              <AboutText>
                Common Scents began with a simple realization: the world of
                fragrance shouldn't feel gatekept or overwhelming.
                <br />
                <br />
                What started as a personal hobby—collecting fragrances, testing
                countless bottles, and getting lost in the nuances of
                perfumery—evolved into something bigger. I found myself
                frustrated by cluttered fragrance databases, surface-level
                reviews, and a lack of accessible education for newcomers. The
                fragrance community deserved better tools, clearer information,
                and a space that felt welcoming rather than intimidating.
                <br />
                <br />
                So I built Common Scents: a platform designed to demystify
                fragrance through honest reviews, practical guides, and
                educational deep-dives into perfumery. Whether you're buying
                your first bottle or you're a seasoned collector, this is a
                space for you.
              </AboutText>
            </TextWrapper>
            <ImgWrapper>
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={AboutIntroImgLandscape}
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet={AboutIntroImgPortrait}
                  type="image/png"
                />
                <source
                  media="(max-width: 768px)"
                  srcSet={AboutIntroImgLandscape}
                  type="image/jpeg"
                />
                <AboutImg
                  src={AboutIntroImgLandscape}
                  alt="A curated collection of luxury fragrance bottles arranged on a marble surface at Common Scents HQ"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </ImgWrapper>
          </ContentSection1Inner>
        </ContentSection1>

        <ContentSection2 aria-labelledby="what-makes-different">
          <ContentSection2Inner>
            <SectionTitle $marginBottom="2rem" id="what-makes-different">
              What Makes Us Different
            </SectionTitle>
            <DifferenceGrid role="list" aria-label="Our unique features">
              <DifferenceCard role="listitem">
                <DifferenceTitle as="h3">
                  Clean, Intuitive Design
                </DifferenceTitle>
                <DifferenceDescription>
                  We've taken everything you love about traditional fragrance
                  databases—accord breakdowns, note pyramids, perfumer info,
                  ratings—and presented it in a format that's actually enjoyable
                  to use. No clutter, no confusion, just the information you
                  need to make informed decisions.
                </DifferenceDescription>
              </DifferenceCard>

              <DifferenceCard role="listitem">
                <DifferenceTitle as="h3">
                  AI-Powered Community Insights
                </DifferenceTitle>
                <DifferenceDescription>
                  Every fragrance page includes our unique AI summary tool.
                  Choose to analyze 10, 25, or 50 user reviews from Fragrantica,
                  and get an instant, comprehensive summary of what the
                  community thinks. It's like reading hundreds of opinions in
                  minutes, helping you understand the full picture before you
                  buy.
                </DifferenceDescription>
                <DifferenceLink
                  to="/fragrance-reviews/creed-viking-cologne#community-reviews"
                  aria-label="Try our AI review summary tool"
                >
                  Try it out
                </DifferenceLink>
              </DifferenceCard>

              <DifferenceCard role="listitem">
                <DifferenceTitle as="h3">
                  Honest, In-Depth Reviews
                </DifferenceTitle>
                <DifferenceDescription>
                  My reviews go beyond marketing copy and surface impressions. I
                  test fragrances across seasons, occasions, and real-world
                  scenarios—then break down performance, versatility, value, and
                  who should actually wear them. No sponsorships, no fluff, just
                  straightforward perspectives from someone who genuinely loves
                  this craft.
                </DifferenceDescription>
                <DifferenceLink
                  to="/fragrance-reviews"
                  aria-label="Browse all fragrance reviews"
                >
                  See Reviews
                </DifferenceLink>
              </DifferenceCard>

              <DifferenceCard role="listitem">
                <DifferenceTitle as="h3">Educational Resources</DifferenceTitle>
                <DifferenceDescription>
                  Fragrance can feel complex, but it doesn't have to be. Through
                  our Tips & Guides and Common Scents Academy sections, we're
                  building a library of practical advice and historical
                  context—from building your first signature wardrobe to
                  understanding the evolution of modern perfumery. This is
                  fragrance education made accessible.
                </DifferenceDescription>
                <DifferenceLink
                  to="/academy"
                  aria-label="Explore fragrance education resources"
                >
                  Read More
                </DifferenceLink>
              </DifferenceCard>
            </DifferenceGrid>
          </ContentSection2Inner>
        </ContentSection2>

        <ContentSection3 aria-labelledby="our-mission">
          <ContentSection3Inner>
            <SectionTitle $marginBottom="1.2rem" $leftAligned id="our-mission">
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

        <CTASection role="complementary" aria-labelledby="cta-title">
          <CTASectionInner>
            <CTATitle id="cta-title">
              Ready to Start Your Fragrance Journey?
            </CTATitle>
            <CTAText>
              Explore our collection of in-depth reviews, practical guides, and
              educational resources.
            </CTAText>
            <ButtonGroup role="group" aria-label="Call to action buttons">
              <Link
                to="/fragrance-reviews"
                aria-label="Browse all fragrance reviews"
              >
                <PrimaryButton>Browse Fragrance Reviews</PrimaryButton>
              </Link>

              <SecondaryLinkButton
                to="/guides"
                ref={linkRef}
                aria-label="Read tips and guides about fragrance"
              >
                Read Tips & Guides
                <span aria-hidden="true"></span>
              </SecondaryLinkButton>
            </ButtonGroup>
          </CTASectionInner>
        </CTASection>
      </article>
    </>
  );
};

export default About;
