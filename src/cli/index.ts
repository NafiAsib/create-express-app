import * as p from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";

export const AvailablePackages = [
  "biome",
  "pino",
  "morgan",
  "jsonwebtoken",
  "kysely",
] as const;

export const DBProviders = ["mysql", "postgres", "sqlite"] as const;

interface CliFlags {
  noGit: boolean;
  noInstall: boolean;
  default: boolean;
  importAlias: string;
}

interface CliResults {
  appName: string;
  packages: (typeof AvailablePackages)[];
  flags: CliFlags;
  databaseProvider: typeof DBProviders;
}

export default async function cli() {
  await setTimeout(1000);
  p.intro(`${color.bgCyan(color.black(" create-app "))}`);

  const project = await p.group(
    {
      name: () =>
        p.text({
          message: "What should be your project name?",
          initialValue: "express-app",
          placeholder: "express-app",
          validate: (value) => {
            if (!value) return "Please enter a valid";
          },
        }),
      language: ({ results }) =>
        p.select({
          message: `Which language do you want to use?`,
          initialValue: "ts",
          options: [
            { value: "ts", label: "TypeScript" },
            { value: "js", label: "JavaScript" },
          ],
        }),
      packages: () =>
        p.multiselect({
          message:
            "Select additional tools you'd like to have. (press space to select multiple)",
          initialValues: ["prettier", "eslint"],
          options: [
            {
              value: "biome",
              label: "Biome",
              hint: "recommended for linting and formatting",
            },
            {
              value: "pino",
              label: "Pino",
              hint: "recommended for logging",
            },
            {
              value: "morgan",
              label: "Morgan",
              hint: "recommended for logging",
            },
            {
              value: "jsonwebtoken",
              label: "jsonwebtoken",
              hint: "recommended for authentication",
            },
          ],
        }),
      database: () =>
        p.select({
          message: "Which database provider would you like to use?",
          initialValue: "postgres",
          options: [
            { value: "postgres", label: "Postgres" },
            { value: "mysql", label: "MySQL" },
            { value: "sqlite", label: "SQLite" },
          ],
        }),
      orm: () =>
        p.select({
          message: "Which ORM would you like to use?",
          initialValue: "kysely",
          options: [
            { value: "kysely", label: "Kysely" },
            { value: "prisma", label: "Prisma" },
            { value: "sequelize", label: "Sequelize" },
            { value: "typeorm", label: "TypeORM" },
          ],
        }),

      install: () =>
        p.confirm({
          message: "Install dependencies?",
          initialValue: false,
        }),
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  if (project.install) {
    const s = p.spinner();
    s.start("Installing via pnpm");
    await setTimeout(2500);
    s.stop("Installed via pnpm");
  }

  let nextSteps = `cd ${project.name}        \n${
    project.install ? "" : "pnpm install\n"
  }pnpm dev`;

  p.note(nextSteps, "Next steps.");

  p.outro(
    `Problems? ${color.underline(
      color.cyan("https://github.com/NafiAsib/create-express-app/issues")
    )}`
  );

  return {
    appName: project.name,
    packages: project.packages,
    database: project.database,
    orm: project.orm,
  };
}
