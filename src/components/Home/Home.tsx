import {
  AuthorContent,
  AuthorImage,
  AuthorSection,
  BottleImage,
  ButtonGroup,
  CategoriesGrid,
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
import { Leaf, Trees, Flower, Flame, Star } from "lucide-react";
import CommonScentsLogo from "../../assets/cs-bulb.png";
import { usePositionAwareButton } from "../../hooks/usePositionAwareButton";
import Afnan9pmBottle from "../../assets/fragrance-pics/Afnan-9pm.webp";

const HomePage: React.FC = () => {
  const secondaryButtonRef = usePositionAwareButton();

  const reviews = [
    {
      id: 1,
      title: "Afnan 9pm - Best Ultramale Clone?",
      description: "A 351 chous, preent, elme varhwanking ir is by amus.",
      img: Afnan9pmBottle,
    },
    {
      id: 2,
      title: "Tom Ford - A Modern Classic",
      description: "Nanila genosai's design cleaned banned rochers.",
    },
    {
      id: 3,
      title: "Creed Aventus - Bold & Refined",
      description: "Fagncate elluers, redoure sautillats, in ream di state.",
    },
  ];

  const categories = [
    { name: "Fresh & Citrus", icon: Leaf, color: "#fef3c7" },
    { name: "Woody", icon: Trees, color: "#fde68a" },
    { name: "Floral", icon: Flower, color: "#fef3c7" },
    { name: "Spicy", icon: Flame, color: "#fde68a" },
    { name: "Niche Picks", icon: Star, color: "#fef3c7" },
  ];

  const guides = [
    {
      title: "How to Build a Signature Scent Wardrobe",
      author: "by Mare clame",
    },
    {
      title: "Perfume Notes Explained: Top, Heart, and Base",
      date: "March 12, 2024",
    },
    {
      title: "Storage Tips to Keep Seems Fresh Longer",
    },
    {
      title: "Flower by session",
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="" />
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
            {reviews.map((review) => (
              <ReviewCard key={review.id}>
                <ReviewImage>
                  <BottleImage src={review.img} />
                </ReviewImage>
                <ReviewContent>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <ReviewDescription>{review.description}</ReviewDescription>
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

          <CategoriesGrid>
            {categories.map((category, index) => (
              <CategoryCard key={index} bgColor={category.color}>
                <CategoryIcon>
                  <category.icon size={48} />
                </CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </SectionContent>
      </Section>

      {/* Fragrance Tips & Guides */}
      <Section>
        <SectionContent>
          <GuideMetaTitle>Fragrance Tips & Guides</GuideMetaTitle>

          <GuidesGrid>
            <GuidesList>
              {guides.map((guide, index) => (
                <GuideItem key={index}>
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
