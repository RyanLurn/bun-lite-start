import "@tanstack/react-start/server-only";
import { drizzle } from "drizzle-orm/bun-sqlite";

import {
  verificationTable,
  accountTable,
  sessionTable,
} from "@/db/schema/auth";
import { userTable } from "@/db/schema/user";
import { dbConfig } from "@/config/db";

export const db = drizzle(dbConfig.SQLITE_FILE_PATH, {
  schema: { userTable, sessionTable, accountTable, verificationTable },
});
