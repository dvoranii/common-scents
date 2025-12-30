const IS_PRODUCTION = import.meta.env.PROD;
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = async () => {
  if (IS_PRODUCTION && MEASUREMENT_ID) {
    const { default: ReactGA } = await import("react-ga4");
    ReactGA.initialize(MEASUREMENT_ID);
    console.log("✓ Google Analytics initialized lazily");
  }
};

export const logPageView = async () => {
  if (IS_PRODUCTION) {
    const { default: ReactGA } = await import("react-ga4");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }
};

export const logEvent = async (
  category: string,
  action: string,
  label?: string
) => {
  if (IS_PRODUCTION) {
    const { default: ReactGA } = await import("react-ga4");
    ReactGA.event({ category, action, label });
  } else {
    console.log("GA Event (dev):", { category, action, label });
  }
};
