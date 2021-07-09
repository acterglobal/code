import 'reflect-metadata'
import { notificationWorker } from './workers/notification-worker'

console.log(`Hello world ${process.pid}`)

notificationWorker.on('active', (job) => {
  console.log(`Working on ${job.name}`)
})

notificationWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.name} progress: `, progress)
})

notificationWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.name}`)
})

notificationWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
