import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const IS_PRODUCTION = import.meta.env.PROD;

export const initGA = () => {
  if (IS_PRODUCTION && MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log("✓ Google Analytics initialized");
  } else if (!IS_PRODUCTION) {
    console.log("Google Analytics disabled in development");
  }
};

export const logPageView = () => {
  if (IS_PRODUCTION) {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (IS_PRODUCTION) {
    ReactGA.event({
      category,
      action,
      label,
    });
  } else {
    // Log to console in development for debugging
    console.log("GA Event (dev):", { category, action, label });
  }
};
