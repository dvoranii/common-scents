import React from "react";
import * as S from "./AcademyTemplate.styled";
import { SEO } from "../../../../../components/SEO/SEO";

export interface AcademyTemplateProps {
  title: string;
  date: string;
  time: string;
  category: string;
  children: React.ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
}

const Academy: React.FC<AcademyTemplateProps> = ({
  title,
  date,
  time,
  category,
  children,
  seoTitle,
  seoDescription,
  canonical,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description:
      seoDescription ||
      `${title} - Learn about ${category} in the Common Scents Academy`,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "Common Scents HQ",
      url: "https://commonscentshq.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Common Scents HQ",
      logo: {
        "@type": "ImageObject",
        url: "https://commonscentshq.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        canonical ||
        `https://commonscentshq.com/academy/${title
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
    },
  };

  return (
    <>
      <SEO
        title={seoTitle || `${title} | Common Scents Academy`}
        description={
          seoDescription ||
          `Learn about ${category} in this comprehensive guide from Common Scents Academy. ${title}`
        }
        canonical={canonical}
        type="article"
        structuredData={structuredData}
      />
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Category>{category}</S.Category>
            <S.Title>{title}</S.Title>
            <S.Meta>
              <S.Date>{date}</S.Date>
              <S.Separator>•</S.Separator>
              <S.Time>{time} (Eastern Standard Time)</S.Time>
            </S.Meta>
          </S.Header>

          <S.Article>{children}</S.Article>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Academy;
