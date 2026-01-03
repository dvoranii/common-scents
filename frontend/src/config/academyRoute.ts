import { lazy } from "react";

const ArchitectureOfSillage = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/ArchitectureOfSillage/ArchitectureOfSillage"
    )
);

const ArtOfBlending = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/ArtOfBlending/ArtOfBlending"
    )
);

const ScienceOfScent = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/ScienceOfScent/ScienceOfScent"
    )
);

const GlobalPerfumery = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/GlobalPerfumery/GlobalPerfumery"
    )
);

export interface AcademyRoute {
  slug: string;
  component: React.LazyExoticComponent<React.FC>;
}

export const academyRoutes: AcademyRoute[] = [
  {
    slug: "the-science-of-scent",
    component: ScienceOfScent,
  },
  {
    slug: "the-art-of-the-blend",
    component: ArtOfBlending,
  },
  {
    slug: "the-architecture-of-sillage",
    component: ArchitectureOfSillage,
  },
  {
    slug: "middle-eastern-vs-french-perfumery",
    component: GlobalPerfumery,
  },
];
