import { lazy } from "react";

const HistoryOfCreed = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/HistoryOfCreed/HistoryOfCreed"
    )
);

const PerfumeryAroundTheWorld = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/PerfumeryAroundTheWorld/PerfumeryAroundTheWorld"
    )
);

const WhatMakesAFragrance = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/WhatMakesAFragrance/WhatMakesAFragrance"
    )
);

const EvolutionOfModernPerfumery = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/EvolutionOfModernPerfumery/EvolutionOfModernPerfumery"
    )
);

const NotePyramidsExplained = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/NotePyramidsExplained/NotePyramidsExplained"
    )
);

const FragranceConcentrationGuide = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/FragranceConcentrationGuide/FragranceConcentrationGuide"
    )
);

const SustainablePerfumery = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/SustainablePerfumery/SustainablePerfumery"
    )
);

const OlfactoryFatigue = lazy(
  () =>
    import(
      "../pages/Academy/Detail/components/pages/OlfactoryFatigue/OlfactoryFatigue"
    )
);

export interface AcademyRoute {
  slug: string;
  component: React.LazyExoticComponent<React.FC>;
}

export const academyRoutes: AcademyRoute[] = [
  {
    slug: "history-of-creed",
    component: HistoryOfCreed,
  },
  {
    slug: "perfumery-around-the-world",
    component: PerfumeryAroundTheWorld,
  },
  {
    slug: "what-makes-a-fragrance",
    component: WhatMakesAFragrance,
  },
  {
    slug: "evolution-of-modern-perfumery",
    component: EvolutionOfModernPerfumery,
  },
  {
    slug: "note-pyramids-explained",
    component: NotePyramidsExplained,
  },
  {
    slug: "fragrance-concentration-guide",
    component: FragranceConcentrationGuide,
  },
  {
    slug: "sustainable-perfumery",
    component: SustainablePerfumery,
  },
  {
    slug: "olfactory-fatigue",
    component: OlfactoryFatigue,
  },
];
