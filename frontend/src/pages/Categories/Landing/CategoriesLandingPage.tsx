import React from "react";
import BrowseLandingTemplate from "../../../components/BrowseLandingTemplate/BrowseLandingTemplate";
import { getAllCategories } from "../../../utils/categoriesUtils";

const CategoriesLandingPage: React.FC = () => {
  const categories = getAllCategories();

  return (
    <BrowseLandingTemplate
      title="Scent Categories"
      introText="Fragrance categories help you understand the core character and style of a scent. Whether you're drawn to fresh citrus, warm woods, or delicate florals, each category offers a distinct olfactory experience. Explore the families below to discover scents that match your personality and preferences."
      items={categories}
      basePath="/categories"
      tagline="Learn about scent categories"
    />
  );
};

export default CategoriesLandingPage;
