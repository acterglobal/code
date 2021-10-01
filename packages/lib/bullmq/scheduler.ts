import { QueueScheduler } from 'bullmq'
import { createRedisConnection as connection } from './connection'

export const createScheduler = (name: string): QueueScheduler => {
  return new QueueScheduler(name, {
    connection,
  })
}
