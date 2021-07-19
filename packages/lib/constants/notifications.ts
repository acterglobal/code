export const DIGEST_CREATE_QUEUE = 'digest_create'
export const EMAIL_OUTBOX_QUEUE = 'email_outbox'
export const NOTIFICATIONS_QUEUE = 'notifications'

export enum NotificationQueueType {
  CREATE_DIGEST = 'createDigest',
  NEW_POST = 'newPost',
  SEND_EMAIL = 'sendEmail',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
