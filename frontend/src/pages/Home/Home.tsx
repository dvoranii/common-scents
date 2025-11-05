import { Hero } from "./components/Hero/Hero";
import { FeaturedReviews } from "./components/FeaturedReviews/FeaturedReviews";
import { ScentCategories } from "./components/ScentCategories/ScentCategories";
import { FragranceLearningHub } from "./components/FragranceGuides/FragranceLearningHub";
import { ScentOccasions } from "./components/Occasions/Occasions";

import { PageContainer } from "../../styles/CommonStyles";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Hero />
      <FeaturedReviews />
      <ScentCategories />
      <ScentOccasions />
      <FragranceLearningHub />
    </PageContainer>
  );
};

export default HomePage;
