import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/Home";
import OccasionDetailPage from "./pages/Occasions/OccasionDetailPage";
import CategoryDetailPage from "./pages/Categories/CategoryDetailPage";
import { fragranceReviewRoutes } from "./config/fragranceReviewRoutes";

function AppRouter() {
  return (
    <Router>
      <Navigation />
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
    </Router>
  );
}

export default AppRouter;
