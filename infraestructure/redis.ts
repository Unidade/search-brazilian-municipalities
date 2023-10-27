import { createClient } from "redis"
import blocked from "blocked-at"

blocked(
  (time, stack, { type, resource }) => {
    console.log(`Blocked for ${time}ms, operation started here:`, stack)
    if (type === "HTTPPARSER" && resource) {
      // resource structure in this example assumes Node 10.x
      console.log(
        `URL related to blocking operation: ${resource.resource.incoming.url}`,
      )
    }
  },
  { resourcesCap: 100 },
)

const REDIS_URL = process.env.REDIS_URL
if (!REDIS_URL) {
  throw new Error("REDIS_URL env variable not defined")
}

console.log(`Connecting to Redis: ${process.env.REDIS_URL}`)

export const redisClient = createClient({
  url: REDIS_URL,
})
redisClient.on("error", (err) => {
  console.error(`Redis error: ${err}`)
  process.exit(1)
})
await redisClient.connect()

export type RedisClientType = typeof redisClient
