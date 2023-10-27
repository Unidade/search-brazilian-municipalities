import { createClient } from "redis"
import { logger } from "../log/logger.js"

const REDIS_URL = process.env.REDIS_URL
if (!REDIS_URL) {
  throw new Error("REDIS_URL env variable not defined")
}

export const redisClient = createClient({
  url: REDIS_URL,
})

export type RedisClientType = typeof redisClient

export async function setupRedis() {
  logger.info(`Connecting to redis url: ${redisClient.options?.url}`)
  await redisClient.connect()
  logger.info("Successfully connect to redis")
}
