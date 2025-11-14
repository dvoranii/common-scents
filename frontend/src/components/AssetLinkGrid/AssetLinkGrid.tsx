import type { Category, Occasion } from "../../types/fragrance.types";
import {
  AssetGridContainer,
  BoxLink,
  AssetWrapper,
  ImageAsset,
  NameText,
  Overlay,
} from "./AssetLinkGrid.styled";

interface AssetLinkGridProps {
  items: Category[] | Occasion[];
  basePath: string;
}

export const AssetLinkGrid: React.FC<AssetLinkGridProps> = ({
  items,
  basePath,
}) => {
  return (
    <AssetGridContainer>
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
          <BoxLink key={slug} to={`${basePath}/${slug}`} $bgColor={bgColor}>
            <Overlay />
            {isCategory && IconComponent && (
              <AssetWrapper $color={iconColor}>
                <IconComponent size={48} />
              </AssetWrapper>
            )}
            {!isCategory && thumbnail && (
              <ImageAsset src={thumbnail} alt={name} />
            )}
            <NameText>{name}</NameText>
          </BoxLink>
        );
      })}
    </AssetGridContainer>
  );
};
