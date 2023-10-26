import { createClient } from "redis"

let _QUITREDIS: () => Promise<string>

export const redisClient = (() => {
  const client_ = createClient({ url: process.env.REDIS_URL })

  _QUITREDIS = client_.quit.bind(client_)
  // REMOVE QUIT AND quit from the client outside of this file
  const client: MakePropertyOptional<typeof client_, "quit" | "QUIT"> = client_

  delete client.quit
  delete client.QUIT

  return client
})()
await redisClient.connect()

export type RedisClientType = typeof redisClient

type MakePropertyOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export async function QUITREDIS() {
  console.log("Quitting Redis")
  return await _QUITREDIS()
}
