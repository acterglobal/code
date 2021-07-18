import { buildSchemaSync, UseMiddleware } from 'type-graphql'
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  resolvers,
} from '@acter/schema/types'

import { ActerResolver } from '@acter/schema/resolvers/acter'
import { SearchResolver } from '@acter/schema/resolvers/search'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'

import { queueNotificationsMiddleware } from './middlewares/queue-notifications'

import { authChecker } from '@acter/schema/auth-checker'
import { NotificationQueueType } from '@acter/lib/constants'

const resolversEnhanceMap: ResolversEnhanceMap = {
  Post: {
    createPost: [
      UseMiddleware(
        queueNotificationsMiddleware(NotificationQueueType.NEW_POST)
      ),
    ],
  },
}

applyResolversEnhanceMap(resolversEnhanceMap)

export const schema = buildSchemaSync({
  authChecker,
  resolvers: [
    ...resolvers,
    ActerResolver,
    ActerConnectionResolver,
    SearchResolver,
  ],
  validate: false,
  dateScalarMode: 'isoDate',
})
