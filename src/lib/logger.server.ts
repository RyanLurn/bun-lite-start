import { type TransportSingleOptions, type LoggerOptions, pino } from "pino";

import { loggerConfig } from "@/config/logger.server";
import { env } from "@/config/env.server";

const fileTransport: TransportSingleOptions = {
  target: "pino/file",
  options: { destination: loggerConfig.FILE_TRANSPORT_DESTINATION },
};

const options: LoggerOptions = {
  level: loggerConfig.LOGGER_LEVEL,
  transport:
    env.NODE_ENV === "production"
      ? fileTransport
      : {
          targets: [
            fileTransport,
            {
              target: "pino-pretty",
              level: loggerConfig.PRETTY_TRANSPORT_LEVEL,
            },
          ],
        },
};

export const logger = pino(options);
