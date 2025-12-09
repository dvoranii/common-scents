import { Link } from "react-router-dom";
import {
  IntroText,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  CardImage,
  CardTextWrapper,
  SectionSubtitle,
  ItemsSection,
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
import type { Season } from "../../types/fragrance.types";

interface ItemGroup {
  title?: string;
  items: (Category | Occasion | Season)[];
  basePath: string;
}

interface BrowseLandingTemplateProps {
  title: string;
  introText: string;
  itemGroups: ItemGroup[];
  tagline: string;
  cardPadding?: string;
  cardTextPadding?: string;
}

const isCategory = (item: Category | Occasion | Season): item is Category => {
  return "icon" in item;
};

const isOccasion = (item: Category | Occasion | Season): item is Occasion => {
  return "image" in item && !("icon" in item);
};

const isSeason = (item: Category | Occasion | Season): item is Season => {
  return "image" in item && !("icon" in item);
};

const BrowseLandingTemplate: React.FC<BrowseLandingTemplateProps> = ({
  title,
  introText,
  itemGroups,
  tagline,
  cardPadding,
  cardTextPadding,
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

          {itemGroups.map((group, groupIndex) => (
            <ItemsSection key={groupIndex}>
              {group.title && <SectionSubtitle>{group.title}</SectionSubtitle>}

              <CardGrid>
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`${group.basePath}/${item.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      $bgColor={isCategory(item) ? item.color : undefined}
                      $padding={cardPadding}
                    >
                      {isCategory(item) && (
                        <CardIcon $color={item.iconColor}>
                          <item.icon size={48} />
                        </CardIcon>
                      )}

                      {(isOccasion(item) || isSeason(item)) && (
                        <CardImage src={item.image} alt={item.name} />
                      )}

                      <CardTextWrapper $padding={cardTextPadding}>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardTextWrapper>
                    </Card>
                  </Link>
                ))}
              </CardGrid>
            </ItemsSection>
          ))}
        </SectionContent>
      </Section>
    </>
  );
};

export default BrowseLandingTemplate;
