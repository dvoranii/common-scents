import type { Category, Occasion } from "../../types/fragrance.types";
import * as S from "./AssetLinkGrid.styled";

interface AssetLinkGridProps {
  items: Category[] | Occasion[];
  basePath: string;
  "aria-label"?: string;
}

export const AssetLinkGrid: React.FC<AssetLinkGridProps> = ({
  items,
  basePath,
  "aria-label": ariaLabel,
}) => {
  return (
    <S.AssetGridContainer aria-label={ariaLabel}>
      {items.map((item) => {
        const isCategory = "icon" in item;
        const name = item.name;
        const slug = item.slug;

        const bgColor = isCategory ? (item as Category).color : "#fff";
        const iconColor = isCategory ? (item as Category).iconColor : undefined;
        const thumbnail = !isCategory
          ? (item as Occasion).thumbnail
          : undefined;
        const IconComponent = isCategory ? (item as Category).icon : null;

        return (
          <S.AssetItem key={slug}>
            <S.BoxLink
              to={`${basePath}/${slug}`}
              $bgColor={bgColor}
              aria-label={name}
            >
              <S.Overlay aria-hidden="true" />

              {isCategory && IconComponent && (
                <S.AssetWrapper $color={iconColor} aria-hidden="true">
                  <IconComponent />
                </S.AssetWrapper>
              )}

              {!isCategory && thumbnail && (
                <S.ImageAsset
                  src={thumbnail}
                  alt=""
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                />
              )}

              <S.NameText>{name}</S.NameText>
            </S.BoxLink>
          </S.AssetItem>
        );
      })}
    </S.AssetGridContainer>
  );
};
