import chalk from "chalk";

/*
 * Logger utility (wrapper around console.log with colors)
 *
 * Usage:
 * logger.error("Error message");
 * logger.warn("Warning message");
 * logger.info("Info message");
 * logger.success("Success message");
 */
export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.cyan(...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args));
  },
};
