import 'reflect-metadata'

import { authChecker } from './auth-checker'
import { GraphQLSchema } from 'graphql/type'
import path from 'path'
import { buildSchema, UseMiddleware } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  crudResolvers,
  relationResolvers,
} from '@acter/schema/generated'
import { QueueInviteEmail } from '@acter/schema/middlewares/queue-invite-email'
import { QueuePostNotifications } from '@acter/schema/middlewares/queue-post-notifications'
import { ActerResolver } from '@acter/schema/resolvers/acter'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'
import { SearchResolver } from '@acter/schema/resolvers/search'

export const generateSchema = async (
  writeSchema = false
): Promise<GraphQLSchema> => {
  const resolversEnhanceMap: ResolversEnhanceMap = {
    Invite: {
      createManyInvite: [UseMiddleware(QueueInviteEmail)],
    },
    Post: {
      createPost: [
        UseMiddleware(QueuePostNotifications(NotificationQueueType.NEW_POST)),
      ],
    },
  }

  applyResolversEnhanceMap(resolversEnhanceMap)

  const generatedPath = path.join(__dirname, 'generated')
  const graphQLSchemaFilename = path.join(generatedPath, 'schema.graphql')
  console.log('in generateSchema with writeSchema', writeSchema)

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
    // emitSchemaFile: schemaExists ? false : graphQLSchemaFilename,
    emitSchemaFile: writeSchema ? graphQLSchemaFilename : false,
  })

  return schema
}
