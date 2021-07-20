import { Worker } from 'bullmq'

export const workerLogger = (worker: Worker, name?: string): void => {
  const log = (message: any, ...optionalParams: any[]) =>
    console.log(`[${name}-worker] ${message}`, ...optionalParams)

  const error = (message: any, ...optionalParams: any[]) =>
    console.error(`[${name}-worker] ${message}`, ...optionalParams)

  worker.on('drained', () =>
    log(`No (more) jobs for worker to complete. Ready...`)
  )

  worker.on('active', (job) => {
    log(`Working on ${job.name}`)
  })

  worker.on('progress', (job, progress) => {
    log(`Job ${job.name} progress: `, progress)
  })

  worker.on('completed', (job) => {
    log(`Completed work on job ${job.name}`)
  })

  worker.on('failed', (job) => {
    error(`Processing job failed ${job.name}: `, job)
  })

  worker.on('error', (err) => {
    error('Something went wrong: ', err.message)
  })
}
