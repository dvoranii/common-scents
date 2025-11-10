import { Link } from "react-router-dom";
import {
  IntroText,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  CardImage,
} from "./BrowseLandingTemplate.styled";
import {
  HeroSection,
  HeroContent,
  LogoContainer,
  MainTitle,
  TitleContainer,
  Tagline,
  Section,
  SectionContent,
} from "../../styles/CommonStyles";
import CommonScentsLogo from "../../assets/cs-bulb.png";
import type { Category } from "../../types/fragrance.types";
import type { Occasion } from "../../types/fragrance.types";

interface BrowseLandingTemplateProps {
  title: string;
  introText: string;
  items: Category[] | Occasion[];
  basePath: string;
  tagline: string;
}

const isCategory = (item: Category | Occasion): item is Category => {
  return "icon" in item;
};

const isOccasion = (item: Category | Occasion): item is Occasion => {
  return "image" in item;
};

const BrowseLandingTemplate: React.FC<BrowseLandingTemplateProps> = ({
  title,
  introText,
  items,
  basePath,
  tagline,
}) => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle $center>{title}</MainTitle>
            <Tagline>{tagline}</Tagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <IntroText>{introText}</IntroText>

          <CardGrid>
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`${basePath}/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Card $bgColor={isCategory(item) ? item.color : undefined}>
                  {isCategory(item) && (
                    <CardIcon $color={item.iconColor}>
                      <item.icon size={48} />
                    </CardIcon>
                  )}

                  {isOccasion(item) && (
                    <CardImage src={item.image} alt={item.name} />
                  )}

                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Link>
            ))}
          </CardGrid>
        </SectionContent>
      </Section>
    </>
  );
};

export default BrowseLandingTemplate;
