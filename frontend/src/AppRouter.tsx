import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import { Layout } from "./components/Layout/Layout";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { logPageView } from "./utils/analytics";

import { fragranceReviewRoutes } from "./config/fragranceReviewRoutes";
import { guidesRoutes } from "./config/guideRoutes";
import { academyRoutes } from "./config/academyRoute";

const HomePage = lazy(() => import("./pages/Home/Home"));
const OccasionLandingPage = lazy(
  () => import("./pages/Occasions/LandingPage/OccasionLandingPage")
);
const OccasionDetailPage = lazy(
  () => import("./pages/Occasions/DetailPage/OccasionDetailPage")
);
const SeasonLandingPage = lazy(
  () => import("./pages/Seasons/LandingPage/SeasonLandingPage")
);
const SeasonDetailPage = lazy(
  () => import("./pages/Seasons/DetailPage/SeasonDetailPage")
);
const CategoriesLandingPage = lazy(
  () => import("./pages/Categories/Landing/CategoriesLandingPage")
);
const CategoryDetailPage = lazy(
  () => import("./pages/Categories/Detail/CategoryDetailPage")
);
const FragranceReviews = lazy(
  () => import("./pages/FragranceReviews/FragranceReviews")
);
const About = lazy(() => import("./pages/About/About"));
const Guides = lazy(() => import("./pages/TipsAndGuides/Landing/Guides"));
const Academy = lazy(() => import("./pages/Academy/Landing/Academy"));
const TermsOfService = lazy(
  () => import("./pages/TermsOfService/TermsOfService")
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function AnalyticsTracker() {
  const location = useLocation();
  const IS_PRODUCTION = import.meta.env.PROD;
  const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (IS_PRODUCTION && MEASUREMENT_ID) {
      logPageView();
    }
  }, [location, IS_PRODUCTION, MEASUREMENT_ID]);

  return null;
}

function AppRouter() {
  return (
    <Router>
      <AnalyticsTracker />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/occasions" element={<OccasionLandingPage />} />
            <Route
              path="/occasions/:occasionSlug"
              element={<OccasionDetailPage />}
            />

            <Route path="/seasons" element={<SeasonLandingPage />} />
            <Route path="/seasons/:seasonSlug" element={<SeasonDetailPage />} />

            <Route path="/categories" element={<CategoriesLandingPage />} />
            <Route
              path="/categories/:categorySlug"
              element={<CategoryDetailPage />}
            />

            <Route path="/fragrance-reviews" element={<FragranceReviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {fragranceReviewRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/fragrance-reviews/${slug}`}
                element={<Component />}
              />
            ))}

            {guidesRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/guides/${slug}`}
                element={<Component />}
              />
            ))}

            {academyRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/academy/${slug}`}
                element={<Component />}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default AppRouter;
