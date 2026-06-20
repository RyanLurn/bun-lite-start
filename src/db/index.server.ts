import { drizzle } from "drizzle-orm/bun-sqlite";

import { dbConfig } from "@/config/db.server";

export const db = drizzle(dbConfig.SQLITE_FILE_PATH);
