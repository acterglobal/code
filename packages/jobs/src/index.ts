import 'reflect-metadata'
import { digestCreateWorker } from './workers/digest-create-worker'
import { emailSendWorker } from './workers/email-send-worker'
import { notificationCreateWorker } from './workers/notification-create-worker'
import { workerLogger } from './lib/worker-logger'

const workerMap = {
  ['digest-create']: digestCreateWorker,
  ['email-send']: emailSendWorker,
  ['notification-create']: notificationCreateWorker,
}

Object.keys(workerMap).forEach((key) => {
  const worker = workerMap[key]
  workerLogger(worker, key)
  worker.resume()
})
