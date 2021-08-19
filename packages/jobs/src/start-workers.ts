import 'reflect-metadata'
import { emailSendWorker } from './email-send/worker'
import { postNotificationsCreateWorker } from './post-notification-create/worker'

emailSendWorker.resume()
postNotificationsCreateWorker.resume()
