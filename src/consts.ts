import figlet from "figlet";
import { logger } from "./utils/logger.js";
import path from "path";
import { fileURLToPath } from "url";

export const TITLE_TEXT = figlet.textSync("CREATE EXPRESS APP", {
  font: "Doom",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

export const DEFAULT_APP_NAME = "my-express-app";
export const CREATE_EXPRESS_APP = "create-express-app";

const __filename = fileURLToPath(import.meta.url); // path to the built `dist/index.js`
const distPath = path.dirname(__filename); // get the dir name
export const PKG_ROOT = path.join(distPath, "../"); // root of the package is the parent of `dist` dir
