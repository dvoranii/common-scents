import React from "react";
import { getAllCategories } from "../../../utils/categoriesUtils";
import BrowseLandingTemplate from "../../../components/BrowseLandingTemplate/BrowseLandingTemplate";

const CategoriesLandingPage: React.FC = () => {
  const categories = getAllCategories();

  return (
    <BrowseLandingTemplate
      title="Fragrance Categories"
      introText="Explore the diverse world of fragrances through distinct scent families. Each category offers unique characteristics and evokes different emotions. Discover which fragrance families resonate with your personal style."
      itemGroups={[
        {
          items: categories,
          basePath: "/categories",
        },
      ]}
      tagline="Discover Your Signature Scent Family"
    />
  );
};

export default CategoriesLandingPage;
