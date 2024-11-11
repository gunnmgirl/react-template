import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { defineTextStyles } from "@chakra-ui/react";

import { buttonRecipe } from "theme/recipes/button.recipe";

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        red: { value: "#EE0F0F" },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    textStyles,
  },
});

export default createSystem(defaultConfig, config);
