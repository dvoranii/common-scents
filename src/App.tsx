import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import HomePage from "./pages/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
