import figlet from "figlet";
import { logger } from "./utils/logger.js";

// export const TITLE_TEXT = `
// CREATE EXPRESS APP
// `;
export const TITLE_TEXT = figlet.textSync("CREATE EXPRESS APP", {
  font: "Doom",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});
export const DEFAULT_APP_NAME = "my-express-app";
export const CREATE_EXPRESS_APP = "create-express-app";
