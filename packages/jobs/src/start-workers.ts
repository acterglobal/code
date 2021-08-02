import 'reflect-metadata'
import { emailSendWorker } from './email-send'
import { postNotificationsCreateWorker } from './post-notification-create'

emailSendWorker.resume()
postNotificationsCreateWorker.resume()
