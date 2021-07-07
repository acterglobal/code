import { buildSchemaSync } from 'type-graphql'
import { resolvers } from '@acter/schema/types'

import { ActerResolver } from '@acter/schema/resolvers/acter'
import { SearchResolver } from '@acter/schema/resolvers/search'
import { ActerConnectionResolver } from '@acter/schema/resolvers/acter-connection'

import { authChecker } from '@acter/schema/auth-checker'

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
