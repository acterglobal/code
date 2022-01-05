import 'reflect-metadata'

import { GraphQLSchema } from 'graphql/type'
import { buildSchema, UseMiddleware } from 'type-graphql'

import { QueueInviteEmail } from '@acter/backend-service/middlewares/queue-invite-email'
import { QueuePostNotifications } from '@acter/backend-service/middlewares/queue-post-notifications'
import { ActerResolver } from '@acter/backend-service/resolvers/acter'
import { ActerConnectionResolver } from '@acter/backend-service/resolvers/acter-connection'
import { SearchResolver } from '@acter/backend-service/resolvers/search'
import { authChecker } from '@acter/lib/auth-checker'
import { NotificationQueueType } from '@acter/lib/constants'
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  crudResolvers,
  relationResolvers,
} from '@acter/schema/generated'

export const generateSchema = async (): Promise<GraphQLSchema> => {
  const resolversEnhanceMap: ResolversEnhanceMap = {
    Invite: {
      createManyInvite: [UseMiddleware(QueueInviteEmail)],
      updateInvite: [UseMiddleware(QueueInviteEmail)],
    },
    Post: {
      createPost: [
        UseMiddleware(QueuePostNotifications(NotificationQueueType.NEW_POST)),
      ],
    },
  }

  applyResolversEnhanceMap(resolversEnhanceMap)

  const schema = await buildSchema({
    authChecker,
    resolvers: [
      ...crudResolvers,
      ...relationResolvers,
      ActerResolver,
      ActerConnectionResolver,
      SearchResolver,
    ],
    validate: false,
    dateScalarMode: 'isoDate',
  })

  return schema
}
