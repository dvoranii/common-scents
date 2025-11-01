import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import HomePage from "./components/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
