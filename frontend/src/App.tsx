import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import AppRouter from "./AppRouter";
import { initGA } from "./utils/analytics";

function App() {
  const IS_PRODUCTION = import.meta.env.PROD;
  const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (IS_PRODUCTION && MEASUREMENT_ID) {
      initGA();
    }
  }, [IS_PRODUCTION, MEASUREMENT_ID]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
