import prisma from '@acter/schema/prisma'
import {
  Acter,
  ActerNotificationEmailFrequency,
  Notification,
  NotificationType,
  User,
} from '@acter/schema/types'

type ActerPick = Pick<Acter, 'id' | 'acterNotifyEmailFrequency'> & {
  User: UserPick
}
type UserPick = Pick<User, 'email'>

export const createNotification = async (
  toActer: ActerPick,
  onActer: ActerPick,
  url: string
): Promise<Notification> => {
  // Only send to those that we want to email
  const sendTo =
    toActer.acterNotifyEmailFrequency ===
    ActerNotificationEmailFrequency.INSTANT
      ? toActer.User.email
      : ''
  return await prisma.notification.create({
    data: {
      type: NotificationType.NEW_ACTIVITY,
      url,
      ToActer: { connect: { id: toActer.id } },
      OnActer: { connect: { id: onActer.id } },
      sendTo,
    },
    include: {
      ToActer: true,
      OnActer: {
        include: {
          ActerType: true,
        },
      },
    },
  })
}
