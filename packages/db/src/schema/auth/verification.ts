import type {InferSelectModel} from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export type Verification = InferSelectModel<typeof verification>;
