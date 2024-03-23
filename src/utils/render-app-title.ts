import gradient from "gradient-string";

import { TITLE_TEXT } from "~/consts.js";

const poimandresTheme = {
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

export const renderAppTitle = () => {
  const titleGradient = gradient(Object.values(poimandresTheme));

  // resolves weird behavior where the ascii is offset
  //   const pkgManager = getUserPkgManager();
  //   if (pkgManager === "yarn" || pkgManager === "pnpm") {
  //     console.log("");
  //   }
  console.log(titleGradient.multiline(TITLE_TEXT));
};
