export const NOTIFICATIONS_QUEUE = 'notifications'
export const EMAIL_OUTBOX_QUEUE = 'email_outbox'

export enum NotificationQueueType {
  NEW_POST = 'newPost',
  SEND_EMAIL = 'sendEmail',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
