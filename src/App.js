import GlobalStyle from "styles/GlobalStyle";
import ThemeProvider from "styles/ThemeProvider";

import Home from "components/pages/Home";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
