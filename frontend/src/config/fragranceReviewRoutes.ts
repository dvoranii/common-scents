import { lazy } from "react";

export const fragranceReviewRoutes = [
  {
    slug: "afnan-9pm",
    component: lazy(
      () => import("../pages/FragranceReviews/Afnan9PM/Afnan9PM")
    ),
  },
  {
    slug: "creed-viking-cologne",
    component: lazy(
      () =>
        import(
          "../pages/FragranceReviews/CreedVikingCologne/CreedVikingCologne"
        )
    ),
  },
  {
    slug: "armaf-club-de-nuit-man",
    component: lazy(
      () =>
        import(
          "../pages/FragranceReviews/ArmafClubDeNuitMan/ArmafClubDeNuitMan"
        )
    ),
  },
  {
    slug: "jpg-le-male-elixir",
    component: lazy(
      () => import("../pages/FragranceReviews/JPGLeMaleElixir/JPGLeMaleElixir")
    ),
  },
  {
    slug: "rayhaan-elixir",
    component: lazy(
      () => import("../pages/FragranceReviews/RayhaanElixir/RayhaanElixir")
    ),
  },
  {
    slug: "baccarat-rouge-540-edp",
    component: lazy(
      () =>
        import("../pages/FragranceReviews/BaccaratRouge540/BaccaratRouge540")
    ),
  },
];
