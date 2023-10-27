import "dotenv/config"

import { redisClient, setupRedis } from "./infrastructure/redis.js"
import { app } from "./app.js"
import { logger } from "./log/logger.js"

await setupRedis()

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})

process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received.")
  logger.info("Closing http server.")
  server.close(() => {
    logger.info("Http server closed.")

    redisClient.quit().then(() => {
      logger.info("Redis client closed")
      process.exit(0)
    })
  })
})
