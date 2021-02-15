import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";

const TesteProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TesteProvider, ...options });

export { customRender as render };
