import { NonEmptyArray, UseMiddleware } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
import { ResolversEnhanceMap } from '@acter/schema/generated'
import {
  relationResolvers,
  FindFirstActerResolver,
  FindUniqueActerResolver,
  FindManyActerTypeResolver,
  FindManyActerConnectionResolver,
  FindManyActivityResolver,
  FindManyActivityTypeResolver,
  FindUniqueInviteResolver,
  FindManyInviteResolver,
  FindManyNotificationResolver,
  FindManyLinkResolver,
  FindFirstNotificationResolver,
  FindUniquePostResolver,
  FindManyPostResolver,
  FindManyInterestTypeResolver,
  FindUniqueUserResolver,
  UpdateActerResolver,
  CreatePostResolver,
  DeleteActerConnectionResolver,
  DeleteLinkResolver,
  DeletePostReactionResolver,
  DeletePostResolver,
  UpdateInviteResolver,
  CreateManyInviteResolver,
  CreateLinkResolver,
  UpdateLinkResolver,
  UpdateNotificationResolver,
  UpdateManyNotificationResolver,
  CreateManyPostResolver,
  CreatePostReactionResolver,
  UpdatePostResolver,
  UpdateUserResolver,
} from '@acter/schema/generated'
import { CheckActerExists } from '@acter/schema/middlewares/check-acter-exists'
import { CheckUserAccess } from '@acter/schema/middlewares/check-user-access'
// import { QueueInviteEmail } from '@acter/schema/middlewares/queue-invite-email'
// import { QueuePostNotifications } from '@acter/schema/middlewares/queue-post-notifications'
import { ActerResolver } from '@acter/schema/resolvers/acter'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'
import { SearchResolver } from '@acter/schema/resolvers/search'

export { applyResolversEnhanceMap } from '@acter/schema/generated'

export const resolversEnhanceMap: ResolversEnhanceMap = {
  Acter: {
    findFirstActer: [UseMiddleware(CheckActerExists, CheckUserAccess)],
  },
  Invite: {
    // createManyInvite: [UseMiddleware(QueueInviteEmail)],
    // updateInvite: [UseMiddleware(QueueInviteEmail)],
  },
  Post: {
    createPost: [
      // UseMiddleware(QueuePostNotifications(NotificationQueueType.NEW_POST)),
    ],
  },
}

//eslint-disable-next-line @typescript-eslint/ban-types
export const resolvers: NonEmptyArray<Function> = [
  ...relationResolvers,
  FindFirstActerResolver,
  FindUniqueActerResolver,
  FindManyActerTypeResolver,
  FindManyActerConnectionResolver,
  FindManyActivityResolver,
  FindManyActivityTypeResolver,
  FindUniqueInviteResolver,
  FindManyInviteResolver,
  FindManyNotificationResolver,
  FindManyLinkResolver,
  FindFirstNotificationResolver,
  FindUniquePostResolver,
  FindManyPostResolver,
  FindManyInterestTypeResolver,
  FindUniqueUserResolver,
  UpdateActerResolver,
  CreatePostResolver,
  DeleteActerConnectionResolver,
  DeleteLinkResolver,
  DeletePostReactionResolver,
  DeletePostResolver,
  UpdateInviteResolver,
  CreateManyInviteResolver,
  CreateLinkResolver,
  UpdateLinkResolver,
  UpdateNotificationResolver,
  UpdateManyNotificationResolver,
  CreateManyPostResolver,
  CreatePostReactionResolver,
  UpdatePostResolver,
  UpdateUserResolver,
  // custom
  ActerResolver,
  ActerConnectionResolver,
  SearchResolver,
]
