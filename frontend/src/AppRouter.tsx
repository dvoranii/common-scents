import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "./components/Layout/Layout";
// import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/Home";
import OccasionDetailPage from "./pages/Occasions/OccasionDetailPage";
import CategoryDetailPage from "./pages/Categories/CategoryDetailPage";
import { fragranceReviewRoutes } from "./config/fragranceReviewRoutes";
import FragranceReviews from "./pages/FragranceReviews/FragranceReviews";
// import Footer from "./components/Footer/Footer";

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
          {/* <Footer /> */}
        </Layout>
      </Router>
    </>
  );
}

export default AppRouter;
