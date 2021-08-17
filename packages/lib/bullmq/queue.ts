import { Queue } from 'bullmq'
import { createRedisConnection as connection } from './connection'

export const createQueue = <TData>(name: string): Queue<TData> => {
  return new Queue<TData>(name, {
    connection,
  })
}
