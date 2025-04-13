import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "../env";
import * as schema from "./schema";

export const db: NeonHttpDatabase<typeof schema> = drizzle(env.POSTGRES_URL, {
  schema,
});
