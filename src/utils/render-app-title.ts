import { TITLE_TEXT } from "@/consts.js";
import gradient from "gradient-string";

/**
 * Theme for the gradient effect.
 */
const theme = {
  blue: "#1478DB",
  brightBlack: "#808080",
  brightBlue: "#1478DB",
  brightCyan: "#00ffff",
  brightGreen: "#33ff00",
  brightPurple: "#cc00ff",
  brightRed: "#ff0000",
  cyan: "#00c5c7",
  green: "#3AD900",
  purple: "#ff2c70",
  red: "#ff2600",
  yellow: "#ffc600",
};

/**
 * Render the app title with a gradient effect.
 */
export const renderAppTitle = () => {
  const titleGradient = gradient(Object.values(theme));

  console.log(titleGradient.multiline(TITLE_TEXT));
};
