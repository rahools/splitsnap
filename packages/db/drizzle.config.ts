import { env } from "./env";

export default {
  dialect: "postgresql",
  url: env.POSTGRES_URL,
  schema: "./src/schema/index.ts",
  out: "./drizzle",
};
