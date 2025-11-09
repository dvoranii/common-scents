import React from "react";
import ContentListingTemplate from "../../components/ContentListingTemplate/ContentListingTemplate";
import { academy } from "../../data/academy";

const Academy: React.FC = () => {
  return (
    <ContentListingTemplate
      title="Fragrance Academy"
      tagline="Practical advice for every fragrance enthusiast."
      items={academy}
      basePath="/acs"
      showLoadMore={true}
      initialVisibleCount={4}
      itemsPerLoad={4}
    />
  );
};

export default Academy;
