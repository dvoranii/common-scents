import { lazy } from "react";

const SignatureScentWardrobe = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/SignatureScentWardrobe/SignatureScentWardrobe"
    )
);

const StorageTips = lazy(
  () => import("../pages/TipsAndGuides/Detail/pages/StorageTips/StorageTips")
);

const FragranceBySeason = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/FragranceBySeason/FragranceBySeason"
    )
);

const HowToApplyFragrance = lazy(
  () =>
    import(
      "../pages/TipsAndGuides/Detail/pages/HowToApplyFragrance/HowToApplyFragrance"
    )
);

export interface GuideRoute {
  slug: string;
  component: React.LazyExoticComponent<React.FC>;
}

export const guidesRoutes: GuideRoute[] = [
  {
    slug: "signature-scent-wardrobe",
    component: SignatureScentWardrobe,
  },
  {
    slug: "storage-tips",
    component: StorageTips,
  },
  {
    slug: "fragrance-by-season",
    component: FragranceBySeason,
  },
  {
    slug: "how-to-apply-fragrance",
    component: HowToApplyFragrance,
  },
];
