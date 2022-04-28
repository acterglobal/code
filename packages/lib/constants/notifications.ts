export enum NotificationQueueType {
  NEW_ACTIVITY = 'activity-notify',
  NEW_MEMBER = 'new-member',
  NEW_POST = 'post-notify',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
