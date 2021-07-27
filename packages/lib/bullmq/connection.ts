import Redis, { Redis as RedisType } from 'ioredis'

export const createRedisConnection: RedisType = new Redis(process.env.REDIS_URL)
