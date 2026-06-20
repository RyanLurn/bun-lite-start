import type { Level } from "pino";

import { z } from "zod";

export const logLevels: Level[] = [
  "fatal",
  "error",
  "warn",
  "info",
  "debug",
  "trace",
] as const;

const envValidator = z.object({
  NODE_ENV: z.enum(["development", "testing", "staging", "production"]),
  LOG_LEVEL: z.enum(logLevels).default("info"),
});

export const env = envValidator.parse(process.env);
