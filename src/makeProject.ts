import { getPkgManagerName } from "@/utils/getPkgManagerName.js";
import path from "path";
import ora from "ora";
import fs from "fs-extra";
import chalk from "chalk";
import { logger } from "./utils/logger.js";
import { PKG_ROOT } from "./consts.js";

interface Options {
  appName: string;
  database: string;
  orm: string;
  packages: string[];
}
export const makeProject = ({ appName, database, orm, packages }: Options) => {
  const pkgManager = getPkgManagerName();
  const directoryToCreateProject = path.resolve(process.cwd(), appName);
  console.log({ pkgManager, directoryToCreateProject });

  const spinner = ora(
    `Scaffolding in: ${directoryToCreateProject}...\n`
  ).start();

  if (fs.existsSync(directoryToCreateProject)) {
    spinner.stopAndPersist();

    console.log(chalk.red(`Error: Directory ${appName} already exists.`));
    spinner.fail("Aborting installation...");
    process.exit(1);
  }
  spinner.start();
  const srcDir = path.resolve(PKG_ROOT, "templates/base");
  console.log(srcDir);
  fs.copySync(srcDir, directoryToCreateProject);
  fs.renameSync(
    path.join(directoryToCreateProject, "_gitignore"),
    path.join(directoryToCreateProject, ".gitignore")
  );

  spinner.succeed(`${appName} ${chalk.green("scaffolded successfully!")}\n`);
};
