import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/Home/Home";
import OccasionDetailPage from "./pages/Occasions/OccasionDetailPage";
import CategoryDetailPage from "./pages/Categories/CategoryDetailPage";
import { fragranceReviewRoutes } from "./config/fragranceReviewRoutes";
import FragranceReviews from "./pages/FragranceReviews/FragranceReviews";
import About from "./pages/About/About";
import Guides from "./pages/TipsAndGuides/Guides";
import Academy from "./pages/Academy/Academy";

function AppRouter() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/occasions/:occasionSlug"
              element={<OccasionDetailPage />}
            />
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
                  <Suspense fallback={<div>Loading review...</div>}>
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
