import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import AppRouter from "./AppRouter";
import { initGA } from "./utils/analytics";
import { HelmetProvider } from "react-helmet-async";

const NewsletterModal = lazy(
  () => import("./components/NewsletterModal/NewsletterModal")
);

function App() {
  const IS_PRODUCTION = import.meta.env.PROD;
  const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (IS_PRODUCTION && MEASUREMENT_ID) {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => initGA());
      } else {
        setTimeout(() => initGA(), 2000);
      }
    }
  }, [IS_PRODUCTION, MEASUREMENT_ID]);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenNewsletterModal");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem("hasSeenNewsletterModal", "true");
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />

        {showModal && (
          <Suspense fallback={null}>
            <NewsletterModal isOpen={showModal} onClose={handleCloseModal} />
          </Suspense>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
