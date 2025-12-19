import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/Home/Home";
import OccasionLandingPage from "./pages/Occasions/LandingPage/OccasionLandingPage";
import OccasionDetailPage from "./pages/Occasions/DetailPage/OccasionDetailPage";
import SeasonLandingPage from "./pages/Seasons/LandingPage/SeasonLandingPage";
import SeasonDetailPage from "./pages/Seasons/DetailPage/SeasonDetailPage";
import CategoriesLandingPage from "./pages/Categories/Landing/CategoriesLandingPage";
import CategoryDetailPage from "./pages/Categories/Detail/CategoryDetailPage";
import { fragranceReviewRoutes } from "./config/fragranceReviewRoutes";
import { guidesRoutes } from "./config/guideRoutes";
import { academyRoutes } from "./config/academyRoute";
import FragranceReviews from "./pages/FragranceReviews/FragranceReviews";
import About from "./pages/About/About";
import Guides from "./pages/TipsAndGuides/Landing/Guides";
import Academy from "./pages/Academy/Landing/Academy";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function AppRouter() {
  return (
    <>
      <Router>
        <Layout>
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

            {fragranceReviewRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/fragrance-reviews/${slug}`}
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}

            {guidesRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/guides/${slug}`}
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
            {academyRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/academy/${slug}`}
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default AppRouter;
