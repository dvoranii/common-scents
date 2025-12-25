import React from "react";
import { academy } from "../../../../../data/academy";
import AcademyTemplate from "../AcademyTemplate/AcademyTemplate";
import PageNavigation from "../../../../../components/PageNavigation/PageNavigation";
import KeyboardNavTooltip from "../../../../../components/KeyboardNavTooltip/KeyboardNavTooltip";

interface AcademyWrapperProps {
  slug: string;
  children: React.ReactNode;
  showNavigation?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

const AcademyWrapper: React.FC<AcademyWrapperProps> = ({
  slug,
  children,
  showNavigation = true,
  seoTitle,
  seoDescription,
}) => {
  const academyItem = academy.find((a) => a.slug === slug);

  if (!academyItem) {
    return <div>Academy article not found</div>;
  }

  return (
    <AcademyTemplate
      title={academyItem.title}
      date={academyItem.date}
      time={academyItem.time}
      category={academyItem.category!}
      seoTitle={seoTitle}
      seoDescription={seoDescription}
      canonical={`https://commonscentshq.com/academy/${slug}`}
    >
      {showNavigation && <KeyboardNavTooltip section={"academy"} />}
      {children}
      {showNavigation && (
        <PageNavigation
          currentSlug={slug}
          items={academy}
          basePath="/academy"
        />
      )}
    </AcademyTemplate>
  );
};

export default AcademyWrapper;
