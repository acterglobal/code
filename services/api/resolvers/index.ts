import { NonEmptyArray, UseMiddleware } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
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
  ResolversEnhanceMap,
} from '@acter/schema/generated'

import { CheckActerExists } from '../middlewares/check-acter-exists'
import { CheckUserAccess } from '../middlewares/check-user-access'
import { QueueInviteEmail } from '../middlewares/queue-invite-email'
import { QueueNotifications } from '../middlewares/queue-notifications'
import { ActerResolver } from '../resolvers/acter'
import { ActerConnectionResolver } from '../resolvers/acter-connection'
import { SearchResolver } from '../resolvers/search'

export { applyResolversEnhanceMap } from '@acter/schema/generated'

export const resolversEnhanceMap: ResolversEnhanceMap = {
  Acter: {
    findFirstActer: [UseMiddleware(CheckActerExists, CheckUserAccess)],
  },
  Invite: {
    createManyInvite: [UseMiddleware(QueueInviteEmail)],
    updateInvite: [UseMiddleware(QueueInviteEmail)],
  },
  Post: {
    createPost: [
      UseMiddleware(QueueNotifications(NotificationQueueType.NEW_POST)),
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
