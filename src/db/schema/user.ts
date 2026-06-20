import "@tanstack/react-start/server-only";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

import { timestamps } from "@/db/helpers/timestamps";
import { id } from "@/db/helpers/id";

export const userTable = sqliteTable("users", {
  id,
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
  image: text("image"),
  ...timestamps,
});

export const userId = text("user_id")
  .notNull()
  .references(() => userTable.id, { onDelete: "cascade" });
