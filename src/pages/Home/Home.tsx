import {
  AuthorContent,
  AuthorImage,
  AuthorSection,
  BottleImage,
  ButtonGroup,
  // CategoriesGrid,
  CategoryCard,
  CategoryIcon,
  CategoryName,
  GuideItem,
  GuideMeta,
  GuideMetaTitle,
  GuidesGrid,
  GuidesList,
  GuideTitle,
  HeroContent,
  HeroSection,
  LogoContainer,
  MainTitle,
  PageContainer,
  PrimaryButton,
  ReviewCard,
  ReviewContent,
  ReviewDescription,
  ReviewImage,
  ReviewLink,
  ReviewsGrid,
  ReviewTitle,
  SecondaryButton,
  Section,
  SectionContent,
  SectionTitle,
  Tagline,
  TitleContainer,
} from "./Home.styled";
import CommonScentsLogo from "../../assets/cs-bulb.png";
import { usePositionAwareButton } from "../../hooks/usePositionAwareButton";
import { getFeaturedFragrances } from "../../utils/fragranceUtils";
import { getFeaturedGuides } from "../../utils/guideUtils";
import { getAllCategories } from "../../utils/categoriesUtils";
import { CarouselSlide, Carousel } from "../../components/Carousel";

const HomePage: React.FC = () => {
  const secondaryButtonRef = usePositionAwareButton();

  const featuredReviews = getFeaturedFragrances(3);
  const featuredGuides = getFeaturedGuides(4);
  const categories = getAllCategories();

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle>COMMON SCENTS</MainTitle>
            <Tagline>MAKING SCENTS MAKE SENSE</Tagline>
          </TitleContainer>

          <ButtonGroup>
            <PrimaryButton>Explore Reviews</PrimaryButton>
            <SecondaryButton ref={secondaryButtonRef}>
              Watch on YouTube
              <span></span>
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* Featured Reviews */}
      <Section>
        <SectionContent>
          <SectionTitle>Featured Reviews</SectionTitle>

          <ReviewsGrid>
            {featuredReviews.map((fragrance) => (
              <ReviewCard key={fragrance.id}>
                <ReviewImage>
                  <BottleImage
                    src={fragrance.thumbnailImage}
                    alt={fragrance.name}
                  />
                </ReviewImage>
                <ReviewContent>
                  <ReviewTitle>
                    {fragrance.name} - {fragrance.house}
                  </ReviewTitle>
                  <ReviewDescription>
                    {fragrance.shortDescription}
                  </ReviewDescription>
                  <ReviewLink>Read Review →</ReviewLink>
                </ReviewContent>
              </ReviewCard>
            ))}
          </ReviewsGrid>
        </SectionContent>
      </Section>

      {/* Scent Categories */}
      <Section altBg>
        <SectionContent>
          <SectionTitle>Scent Categories</SectionTitle>

          <Carousel>
            {categories.map((category) => (
              <CarouselSlide key={category.slug}>
                <CategoryCard bgColor={category.color}>
                  <CategoryIcon $color={category.iconColor}>
                    <category.icon size={48} />
                  </CategoryIcon>
                  <CategoryName>{category.name}</CategoryName>
                </CategoryCard>
              </CarouselSlide>
            ))}
          </Carousel>
        </SectionContent>
      </Section>
      {/* Fragrance Tips & Guides */}
      <Section>
        <SectionContent>
          <GuideMetaTitle>Fragrance Tips & Guides</GuideMetaTitle>

          <GuidesGrid>
            <GuidesList>
              {featuredGuides.map((guide) => (
                <GuideItem key={guide.id}>
                  <GuideTitle>{guide.title}</GuideTitle>
                  {guide.author && <GuideMeta>{guide.author}</GuideMeta>}
                  {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                </GuideItem>
              ))}
            </GuidesList>

            <AuthorSection>
              <AuthorContent>
                <AuthorImage />
                <p>Hi! I'm [Name], the nose behind Common Scents</p>
              </AuthorContent>
            </AuthorSection>
          </GuidesGrid>
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
