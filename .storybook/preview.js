import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeNames, ThemeNames.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const viewports = {
  extraSmall: {
    name: "Portrait phone (default) (sm)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  extraExtraLarge: {
    name: "Extra Large Desktop (xxl)",
    styles: {
      width: "1600px",
      height: "1024px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
