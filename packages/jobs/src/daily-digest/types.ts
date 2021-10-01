import { Acter, Activity, Post } from '@acter/schema'

export interface DailyDigest {
  acter: Acter
  afterDateTime: Date
}

export interface ActivityNotification extends Omit<Activity, 'Notification'> {
  notificationUrl: string
}

export interface PostNotification extends Omit<Post, 'Notification'> {
  notificationUrl: string
}

export type ActerNotificationsMap = {
  acter: Acter
  activities: ActivityNotification[]
  posts: PostNotification[]
}

export type NotificationByActerMap = Record<string, ActerNotificationsMap>

export type NotificationByActer = {
  acters: ActerNotificationsMap[]
}
