import { useMemo } from "react";
import { generateTagsFromFragrances } from "../../utils/tagUtils";
import { getAllFragrances } from "../../utils/fragranceUtils";
import SearchAndFilter from "../../components/SearchAndFilter/SearchAndFilter";
import * as S from "./FragranceReviews.styled";
import { SEO } from "../../components/SEO/SEO";
import {
  groupTagsByType,
  convertToTagGroups,
  getFragranceSearchableText,
  getFragranceItemTags,
  getTagColorByName,
  getFragranceTopNotes,
} from "../../utils/fragranceReviewsUtils";

const FragranceReviews: React.FC = () => {
  const allFragrances = useMemo(() => getAllFragrances(), []);
  const availableTags = useMemo(() => generateTagsFromFragrances(), []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fragrance Reviews | Common Scents HQ",
    description:
      "Browse our comprehensive collection of fragrance reviews. Discover detailed analysis of top perfumes, colognes, and scents from popular houses and niche brands.",
    url: "https://commonscentshq.com/fragrance-reviews",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allFragrances.slice(0, 20).map((fragrance, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Review",
          itemReviewed: {
            "@type": "Product",
            name: fragrance.name,
            brand: fragrance.house,
          },
          url: `https://commonscentshq.com/fragrance-reviews/${fragrance.slug}`,
        },
      })),
    },
  };

  const groupedTags = useMemo(
    () => groupTagsByType(availableTags),
    [availableTags]
  );

  const tagGroups = useMemo(
    () => convertToTagGroups(groupedTags),
    [groupedTags]
  );

  const renderResults = (filteredFragrances: typeof allFragrances) => (
    <main>
      <S.PageWrapper>
        <S.FragranceGrid role="list" aria-label="Fragrance reviews">
          {filteredFragrances.map((fragrance) => (
            <S.ThumbnailCard
              key={fragrance.id}
              to={`/fragrance-reviews/${fragrance.slug}`}
              role="listitem"
              aria-label={`Read review: ${fragrance.name} by ${fragrance.house}`}
            >
              <S.ThumbnailImage
                src={fragrance.thumbnailImage}
                alt={`${fragrance.name} fragrance bottle`}
                width="320"
                height="200"
                loading="lazy"
                decoding="async"
              />
              <S.ThumbnailContent>
                <S.NameAndHouseWrapper>
                  <S.FragranceHouse>{fragrance.house}</S.FragranceHouse>
                  <S.FragranceName>{fragrance.name}</S.FragranceName>
                </S.NameAndHouseWrapper>

                {fragrance.notes && (
                  <S.ThumbnailNotes aria-label="Top fragrance notes">
                    {getFragranceTopNotes(fragrance)}
                  </S.ThumbnailNotes>
                )}
              </S.ThumbnailContent>
            </S.ThumbnailCard>
          ))}
        </S.FragranceGrid>
      </S.PageWrapper>
    </main>
  );

  return (
    <>
      <SEO
        title="Fragrance Reviews | In-Depth Perfume & Cologne Analysis"
        description="Browse comprehensive fragrance reviews with detailed analysis of notes, performance, and recommendations. Discover your next signature scent with our expert insights."
        canonical="https://commonscentshq.com/fragrance-reviews"
        structuredData={structuredData}
      />

      <SearchAndFilter
        items={allFragrances}
        tagGroups={tagGroups}
        getSearchableText={getFragranceSearchableText}
        getItemTags={getFragranceItemTags}
        getTagColor={(tagName: string) =>
          getTagColorByName(tagName, availableTags)
        }
        searchPlaceholder="Search by name, brand, or notes..."
        renderResults={renderResults}
      />
    </>
  );
};

export default FragranceReviews;
