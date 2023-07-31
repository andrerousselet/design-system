import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

export const {
  styled,
  theme,
  createTheme,
  css,
  globalCss,
  getCssText,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
});
