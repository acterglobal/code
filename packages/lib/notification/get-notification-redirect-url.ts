import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActerTypes } from '@acter/lib/constants'
import {
  Acter,
  ActerJoinSettings,
  Notification,
  NotificationType,
} from '@acter/schema'

/**
 * Gives notification redirect url depends on notification type and acter join settings
 * @param notification
 * @param onActer
 * @returns notification url
 */
export const getNotificationRedirectUrl = (
  notification: Notification,
  onActer: Acter
): string => {
  if (
    notification.type === NotificationType.NEW_MEMBER &&
    onActer.acterJoinSetting === ActerJoinSettings.RESTRICTED
  ) {
    const extraPath =
      onActer.ActerType.name === ActerTypes.GROUP
        ? '?inviteTab=requests'
        : 'settings?inviteTab=requests'
    return acterAsUrl({ acter: onActer, includeBaseUrl: true, extraPath })
  }

  return notification.url
}
