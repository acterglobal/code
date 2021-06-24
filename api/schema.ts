import { buildSchemaSync } from 'type-graphql'
import { resolvers } from '@schema'

import { ActerResolver } from 'api/resolvers/acter'
import { SearchResolver } from 'api/resolvers/search'
import { ActerConnectionResolver } from 'api/resolvers/acter-connection'
import { PostDeleteResolver } from 'api/resolvers/post_delete'

import { authChecker } from 'api/auth-checker'

export const schema = buildSchemaSync({
  authChecker,
  resolvers: [
    ...resolvers,
    ActerResolver,
    ActerConnectionResolver,
    SearchResolver,
    // PostDeleteResolver,
  ],
  validate: false,
  dateScalarMode: 'isoDate',
})
