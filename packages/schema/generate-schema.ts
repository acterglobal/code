import 'reflect-metadata'

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
import { CheckActerExists } from '@acter/schema/middlewares/check-acter-exists'
import { CheckUserAccess } from '@acter/schema/middlewares/check-user-access'
import { QueueInviteEmail } from '@acter/schema/middlewares/queue-invite-email'
import { QueuePostNotifications } from '@acter/schema/middlewares/queue-post-notifications'
import { ActerResolver } from '@acter/schema/resolvers/acter'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'
import { SearchResolver } from '@acter/schema/resolvers/search'

import { authChecker } from './auth-checker'

let schema

export const generateSchema = async (
  writeSchema = false
): Promise<GraphQLSchema> => {
  const resolversEnhanceMap: ResolversEnhanceMap = {
    Acter: {
      findFirstActer: [UseMiddleware(CheckActerExists, CheckUserAccess)],
    },
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

  if (!schema) {
    const generatedPath = path.join(__dirname, 'generated')
    const graphQLSchemaFilename = path.join(generatedPath, 'schema.graphql')
    console.debug('In generateSchema with writeSchema', writeSchema)
    schema = await buildSchema({
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
  } else {
    console.debug('Using existing schema')
  }

  return schema
}
