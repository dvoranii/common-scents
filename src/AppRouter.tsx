import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/Home";
import OccasionDetailPage from "./pages/Occasions/OccasionDetailPage";

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
        {/* Future routes go here */}
        {/* <Route path="/categories/:categorySlug" element={<CategoryDetailPage />} /> */}
        {/* <Route path="/fragrances/:fragranceId" element={<FragranceDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
