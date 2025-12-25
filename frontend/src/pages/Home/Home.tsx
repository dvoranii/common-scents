import { Hero } from "./components/Hero/Hero";
import { FeaturedReviews } from "./components/FeaturedReviews/FeaturedReviews";
import { ScentCategories } from "./components/ScentCategories/ScentCategories";
import { FragranceGuides } from "./components/FragranceGuides/FragranceGuides";
import { ScentOccasions } from "./components/Occasions/Occasions";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedReviews />
      <ScentCategories />
      <ScentOccasions />
      <FragranceGuides />
    </>
  );
};

export default HomePage;
