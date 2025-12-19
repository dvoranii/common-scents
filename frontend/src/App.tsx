import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import AppRouter from "./AppRouter";
import { initGA } from "./utils/analyitics";

function App() {
  useEffect(() => {
    initGA();
  }, []);

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
