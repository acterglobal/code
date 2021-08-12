export const POST_NOTIFICATIONS_QUEUE = 'post-notifications'
export const EMAIL_OUTBOX_QUEUE = 'email-outbox'

export enum NotificationQueueType {
  NEW_POST = 'newPost',
  SEND_EMAIL = 'sendEmail',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
