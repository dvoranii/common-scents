import React from "react";
import ContentListingTemplate from "../../components/ContentListingTemplate/ContentListingTemplate";
import { guides } from "../../data/guides";

const Guides: React.FC = () => {
  return (
    <ContentListingTemplate
      title="Fragrance Tips & Guides"
      tagline="Practical advice for every fragrance enthusiast."
      items={guides}
      basePath="/guides"
      showLoadMore={false}
    />
  );
};

export default Guides;
