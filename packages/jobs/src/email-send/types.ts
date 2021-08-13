import { Email } from '@acter/lib/email'
import { Notification } from '@acter/schema/types'

export interface NotificationEmail extends Email {
  /**
   * Notification to close out on send success
   */
  notification?: Notification
}
