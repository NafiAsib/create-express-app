#!/usr/bin/env node

import cli from "@/cli/index.js";
import { logger } from "@/utils/logger.js";
import { renderAppTitle } from "@/utils/render-app-title.js";
import { makeProject } from "./makeProject.js";

const main = async () => {
  renderAppTitle();
  const userAgent = process.env.npm_config_user_agent;
  console.log(userAgent);
  try {
    const { appName, database, orm, packages } = await cli();
    console.log({ appName, database, orm, packages });
    makeProject({ appName, database, orm, packages });
  } catch (error) {
    logger.error(error);
  }
};

main().catch((err) => {
  logger.error("Aborting installation...");
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});
