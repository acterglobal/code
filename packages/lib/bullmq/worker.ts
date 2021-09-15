import { createRedisConnection as connection } from './connection'
import { Worker, WorkerOptions } from 'bullmq'

export const createWorker = (
  name: string,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  processor: (job: any) => Promise<any>,
  opts?: WorkerOptions
): Worker => {
  const optsWithConnection: WorkerOptions = {
    connection,
    ...opts,
  }
  return new Worker(name, processor, optsWithConnection)
}
