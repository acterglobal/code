import { Queue } from 'bullmq'
import { createRedisConnection as connection } from './connection'

export const createQueue = (name: string): Queue => {
  return new Queue(name, {
    connection,
  })
}
