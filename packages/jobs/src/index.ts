import 'reflect-metadata'
import { emailSendWorker } from './workers/email-send-worker'
import { notificationCreateWorker } from './workers/notification-create-worker'

emailSendWorker.resume()
notificationCreateWorker.resume()
