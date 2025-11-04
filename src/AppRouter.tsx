import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/Home";
import OccasionDetailPage from "./pages/Occasions/OccasionDetailPage";
import CategoryDetailPage from "./pages/Categories/CategoryDetailPage";

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
        {/* Future routes go here */}
        {/* <Route path="/categories/:categorySlug" element={<CategoryDetailPage />} /> */}
        {/* <Route path="/fragrances/:fragranceId" element={<FragranceDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
