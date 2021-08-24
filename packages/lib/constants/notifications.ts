export const ACTIVITY_NOTIFICATIONS_CREATE = 'activity-notifications-create'
export const ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER =
  'activity-notifications-create-for-acter'
export const POST_NOTIFICATIONS_QUEUE = 'post-notifications'
export const EMAIL_SEND_QUEUE = 'email-send'
export const NEW_MEMBER_NOTIFICATION_QUEUE = 'new-member-notification'

export enum NotificationQueueType {
  NEW_POST = 'post',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
