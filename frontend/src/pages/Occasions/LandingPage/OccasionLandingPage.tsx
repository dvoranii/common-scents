import React from "react";
import BrowseLandingTemplate from "../../../components/BrowseLandingTemplate/BrowseLandingTemplate";
import { getAllOccasions } from "../../../utils/occasionsUtils";
import { getAllSeasons } from "../../../utils/seasonsUtils";

const OccasionLandingPage: React.FC = () => {
  const occasions = getAllOccasions();
  const seasons = getAllSeasons();

  return (
    <BrowseLandingTemplate
      title="Fragrance Occasions"
      introText="The right fragrance sets the perfect mood for any moment. From confidence-boosting scents for the workday to magnetic fragrances for date night, discover recommendations tailored to life's many occasions. Find your perfect scent for every situation."
      itemGroups={[
        {
          title: "Seasons",
          items: seasons,
          basePath: "/seasons",
        },
        {
          title: "Events & Activities",
          items: occasions,
          basePath: "/occasions",
        },
      ]}
      tagline="Know the best time and occasion to wear specific fragrances"
      cardPadding="0px"
      cardTextPadding="0px 20px 40px 20px"
    />
  );
};

export default OccasionLandingPage;
