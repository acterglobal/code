import { Email } from '@acter/lib/email'
import { Notification } from '@acter/schema'

export interface NotificationEmail extends Email {
  /**
   * Notification to close out on send success
   */
  notification?: Notification
}
