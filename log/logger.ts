import winston from "winston"

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "municipio" },
  transports: [
    new winston.transports.File({
      filename: "log/logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "log/logs/combined.log" }),
  ],
})

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}
