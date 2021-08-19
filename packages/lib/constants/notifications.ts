export const ACTIVITY_NOTIFICATIONS_CREATE = 'activity-notifications-create'
export const ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER =
  'activity-notifications-create-for-acter'
export const POST_NOTIFICATIONS_QUEUE = 'post-notifications'
export const EMAIL_SEND_QUEUE = 'email-send'

export enum NotificationQueueType {
  NEW_POST = 'newPost',
  SEND_EMAIL = 'sendEmail',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
