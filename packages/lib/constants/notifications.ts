export const NOTIFICATIONS_QUEUE = 'notifications'

export enum NotificationType {
  NEW_POST = 'newPost',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
