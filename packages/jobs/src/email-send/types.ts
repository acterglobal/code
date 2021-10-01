import { Email } from '@acter/lib/email'

interface Notification {
  id: string
}

export interface NotificationEmail extends Email {
  /**
   * Notifications to close out on send success
   */
  notifications?: Notification | Notification[]
}
