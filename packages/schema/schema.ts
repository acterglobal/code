import { QueuePostNotifications } from './middlewares/queue-post-notifications'
import { buildSchemaSync, UseMiddleware } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
import { authChecker } from '@acter/schema/auth-checker'
import { ActerResolver } from '@acter/schema/resolvers/acter'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'
import { SearchResolver } from '@acter/schema/resolvers/search'
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  crudResolvers,
  relationResolvers,
} from '@acter/schema/types'

const resolversEnhanceMap: ResolversEnhanceMap = {
  Post: {
    createPost: [
      UseMiddleware(QueuePostNotifications(NotificationQueueType.NEW_POST)),
    ],
  },
}

applyResolversEnhanceMap(resolversEnhanceMap)

export const schema = buildSchemaSync({
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
