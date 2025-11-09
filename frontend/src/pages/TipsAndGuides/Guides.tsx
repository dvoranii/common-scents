import {
  HeroSection,
  HeroContent,
  LogoContainer,
  MainTitle,
  TitleContainer,
  Tagline,
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../styles/CommonStyles";
import {
  GuidesGrid,
  GuideCard,
  GuideTitle,
  GuideAuthor,
} from "./Guides.styled";
import CommonScentsLogo from "../../assets/cs-bulb.png";
import { guides } from "../../data/guides";
import { Link } from "react-router-dom";

const Guides: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle>Fragrance Tips & Guides</MainTitle>
            <Tagline>Practical advice for every fragrance enthusiast.</Tagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <SectionTitle>Essential Guides</SectionTitle>
          <SectionSubtitle style={{ margin: "0 auto", marginBottom: "3rem" }}>
            Master the fundamentals of fragrance with our comprehensive guides
          </SectionSubtitle>

          <GuidesGrid>
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guides/${guide.slug}`}
                style={{ textDecoration: "none" }}
              >
                <GuideCard>
                  <GuideTitle>{guide.title}</GuideTitle>
                  {guide.author && <GuideAuthor>{guide.author}</GuideAuthor>}
                </GuideCard>
              </Link>
            ))}
          </GuidesGrid>
        </SectionContent>
      </Section>
    </>
  );
};

export default Guides;
