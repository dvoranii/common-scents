import React from "react";
import { guides } from "../../../../../data/guides";
import TipsTemplate from "../TipsTemplate/TipsTemplate";
import PageNavigation from "../../../../../components/PageNavigation/PageNavigation";
import KeyboardNavTooltip from "../../../../../components/KeyboardNavTooltip/KeyboardNavTooltip";
interface GuideWrapperProps {
  slug: string;
  children: React.ReactNode;
  showNavigation?: boolean;
}

const GuideWrapper: React.FC<GuideWrapperProps> = ({
  slug,
  children,
  showNavigation = true,
}) => {
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <TipsTemplate
      title={guide.title}
      date={guide.date}
      time={guide.time}
      category={guide.category!}
    >
      {showNavigation && <KeyboardNavTooltip section={"guides"} />}
      {children}

      {showNavigation && (
        <PageNavigation currentSlug={slug} items={guides} basePath="/guides" />
      )}
    </TipsTemplate>
  );
};

export default GuideWrapper;
