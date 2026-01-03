import { lazy } from "react";

const SmartBuyingGuide = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/FragranceBySeason/FragranceBySeason"
    )
);

const LongevityGuide = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/HowToApplyFragrance/LongevityGuide"
    )
);

const LayeringMyth = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/SignatureScentWardrobe/LayeringMyth"
    )
);
const CollectionBuildingGuide = lazy(
  () => import("../pages/TipsAndGuides/Detail/pages/StorageTips/StorageTips")
);

export interface GuideRoute {
  slug: string;
  component: React.LazyExoticComponent<React.FC>;
}

export const guidesRoutes: GuideRoute[] = [
  {
    slug: "smart-guide-buying-wearing-fragrances",
    component: SmartBuyingGuide,
  },
  {
    slug: "why-longevity-does-not-matter",
    component: LongevityGuide,
  },
  {
    slug: "do-not-layer-fragrances",
    component: LayeringMyth,
  },
  {
    slug: "how-to-build-a-collection",
    component: CollectionBuildingGuide,
  },
];
