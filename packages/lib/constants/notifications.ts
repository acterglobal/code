export enum NotificationQueueType {
  NEW_ACTIVITY = 'activity-notify',
  NEW_POST = 'post-notify',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
