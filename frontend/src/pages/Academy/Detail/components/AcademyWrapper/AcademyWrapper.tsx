import React from "react";
import { academy } from "../../../../../data/academy";
import AcademyTemplate from "../AcademyTemplate/AcademyTemplate";
import AcademyNavigation from "../AcademyNavigation/AcademyNavigation";

interface AcademyWrapperProps {
  slug: string;
  children: React.ReactNode;
  showNavigation?: boolean;
}

const AcademyWrapper: React.FC<AcademyWrapperProps> = ({
  slug,
  children,
  showNavigation = true,
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
    >
      {children}

      {showNavigation && (
        <AcademyNavigation currentSlug={slug} basePath="/academy" />
      )}
    </AcademyTemplate>
  );
};

export default AcademyWrapper;
