export enum NotificationQueueType {
  NEW_ACTIVITY = 'activity-notify',
  NEW_INVITE = 'invite-notify',
  NEW_MEMBER = 'new-member',
  NEW_POST = 'post-notify',
  // TODO Fix mentions notications
  // NEW_MENTION = 'post-mention-notify',
}

export enum NotificationJobState {
  QUEUED,
  STARTED,
  FINISHED,
}
