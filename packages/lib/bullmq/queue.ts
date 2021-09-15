import { createRedisConnection as connection } from './connection'
import { Queue } from 'bullmq'

export const createQueue = <TData>(name: string): Queue<TData> => {
  return new Queue<TData>(name, {
    connection,
  })
}
