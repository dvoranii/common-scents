import React from "react";
import BrowseLandingTemplate from "../../../components/BrowseLandingTemplate/BrowseLandingTemplate";
import { getAllSeasons } from "../../../utils/seasonsUtils";

const SeasonLandingPage: React.FC = () => {
  const seasons = getAllSeasons();

  return (
    <BrowseLandingTemplate
      title="Fragrance Seasons"
      introText="Each season brings its own mood and atmosphere, and your fragrance should match. From crisp winter woods to fresh summer citrus, discover scents perfectly suited to every time of year. Find fragrances that harmonize with nature's rhythm."
      itemGroups={[
        {
          items: seasons,
          basePath: "/seasons",
        },
      ]}
      tagline="Discover the perfect fragrance for every season"
      cardPadding="0px"
      cardTextPadding="0px 20px 40px 20px"
      seoTitle="Seasonal Fragrance Guide | Best Scents for Every Season | Common Scents HQ"
      seoDescription="Complete seasonal fragrance guide. Discover warm winter scents, fresh summer colognes, and transitional perfumes for spring and fall. Match your scent to the season."
      canonical="https://commonscentshq.com/seasons"
    />
  );
};

export default SeasonLandingPage;
