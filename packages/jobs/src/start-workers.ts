import 'reflect-metadata'
import { emailSendWorker } from './email-send/worker'
import { activityNotificationsCreateWorker } from './activity-notifications-create/worker'
import { activityNotificationsOnActerCreate } from './activity-notifications-on-acter-create/worker'
import { postNotificationsCreateWorker } from './post-notification-create/worker'

activityNotificationsCreateWorker.resume()
activityNotificationsOnActerCreate.resume()
emailSendWorker.resume()
postNotificationsCreateWorker.resume()
