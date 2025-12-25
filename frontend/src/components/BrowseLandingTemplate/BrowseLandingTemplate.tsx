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
import CommonScentsLogo from "/assets/images/cs-bulb.webp";
import type { Category } from "../../types/fragrance.types";
import type { Occasion } from "../../types/fragrance.types";
import type { Season } from "../../types/fragrance.types";
import { SEO } from "../../components/SEO/SEO";

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
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
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
  seoTitle,
  seoDescription,
  canonical,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: seoDescription || introText,
    url:
      canonical ||
      `https://commonscentshq.com/${itemGroups[0]?.basePath || ""}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemGroups.flatMap((group, groupIndex) =>
        group.items.map((item, itemIndex) => ({
          "@type": "ListItem",
          position: groupIndex * 100 + itemIndex + 1,
          item: {
            "@type": "Thing",
            name: item.name,
            description: item.description,
            url: `https://commonscentshq.com${group.basePath}/${item.slug}`,
          },
        }))
      ),
    },
  };

  return (
    <>
      <SEO
        title={seoTitle || `${title} | Common Scents HQ`}
        description={seoDescription || introText}
        canonical={canonical}
        structuredData={structuredData}
      />

      <main>
        <HeroSection role="banner">
          <HeroContent $padding>
            <LogoContainer>
              <img
                src={CommonScentsLogo}
                alt="Common Scents HQ Logo"
                width="153"
                height="205"
                loading="lazy"
                decoding="async"
              />
            </LogoContainer>

            <header>
              <TitleContainer>
                <MainTitle $center>{title}</MainTitle>
                <Tagline role="doc-subtitle">{tagline}</Tagline>
              </TitleContainer>
            </header>
          </HeroContent>
        </HeroSection>

        <Section aria-labelledby="content-intro">
          <SectionContent $animate>
            <IntroText id="content-intro">{introText}</IntroText>

            {itemGroups.map((group, groupIndex) => (
              <ItemsSection
                key={groupIndex}
                aria-labelledby={
                  group.title ? `section-${groupIndex}` : undefined
                }
              >
                {group.title && (
                  <SectionSubtitle as="h2" id={`section-${groupIndex}`}>
                    {group.title}
                  </SectionSubtitle>
                )}

                <CardGrid
                  role="list"
                  aria-label={`${group.title || title} items`}
                >
                  {group.items.map((item) => (
                    <li key={item.slug} role="listitem">
                      <Link
                        to={`${group.basePath}/${item.slug}`}
                        style={{ textDecoration: "none" }}
                        aria-label={`Browse ${item.name}: ${item.description}`}
                      >
                        <Card
                          $bgColor={isCategory(item) ? item.color : undefined}
                          $padding={cardPadding}
                        >
                          {isCategory(item) && (
                            <CardIcon
                              $color={item.iconColor}
                              aria-hidden="true"
                            >
                              <item.icon size={48} />
                            </CardIcon>
                          )}

                          {(isOccasion(item) || isSeason(item)) && (
                            <CardImage
                              src={item.image}
                              alt={item.name}
                              width="300"
                              height="200"
                              loading="lazy"
                              decoding="async"
                            />
                          )}

                          <CardTextWrapper $padding={cardTextPadding}>
                            <CardTitle as="h3">{item.name}</CardTitle>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
                          </CardTextWrapper>
                        </Card>
                      </Link>
                    </li>
                  ))}
                </CardGrid>
              </ItemsSection>
            ))}
          </SectionContent>
        </Section>
      </main>
    </>
  );
};

export default BrowseLandingTemplate;
