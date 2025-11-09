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
  AcademyGrid,
  AcademyCard,
  AcademyTitle,
  AcademyAuthor,
} from "./Academy.styled";
import CommonScentsLogo from "../../assets/cs-bulb.png";
import { academy } from "../../data/academy";
import { Link } from "react-router-dom";

const Academy: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle>Fragrance Academy</MainTitle>
            <Tagline>Practical advice for every fragrance enthusiast.</Tagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <SectionTitle>Essential Lessons</SectionTitle>
          <SectionSubtitle style={{ margin: "0 auto", marginBottom: "3rem" }}>
            Understand the science and history behind perfumery
          </SectionSubtitle>

          <AcademyGrid>
            {academy.map((ac) => (
              <Link
                key={ac.id}
                to={`/acs/${ac.slug}`}
                style={{ textDecoration: "none" }}
              >
                <AcademyCard>
                  <AcademyTitle>{ac.title}</AcademyTitle>
                  {ac.author && <AcademyAuthor>{ac.author}</AcademyAuthor>}
                </AcademyCard>
              </Link>
            ))}
          </AcademyGrid>
        </SectionContent>
      </Section>
    </>
  );
};

export default Academy;
