import {
  ActerNotificationEmailFrequency,
  Activity,
  Notification,
  Post,
} from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

type CreateNotificationParams = Pick<
  Notification,
  'ToActer' | 'OnActer' | 'url' | 'type'
> & {
  Activity?: Activity
  Post?: Post
}

export const createOneNotification = async ({
  ToActer,
  OnActer,
  url,
  type,
  Activity,
  Post,
}: CreateNotificationParams): Promise<Notification> => {
  // Only send to those that we want to email
  const sendTo =
    ToActer.acterNotifyEmailFrequency ===
    ActerNotificationEmailFrequency.INSTANT
      ? ToActer.User.email
      : ''
  const activityConnect = Activity
    ? { Activity: { connect: { id: Activity.id } } }
    : {}
  const postConnect = Post ? { Post: { connect: { id: Post.id } } } : {}
  return await prisma.notification.create({
    data: {
      sendTo,
      type,
      url,
      ToActer: { connect: { id: ToActer.id } },
      OnActer: { connect: { id: OnActer.id } },
      ...activityConnect,
      ...postConnect,
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
