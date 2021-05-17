import { buildSchemaSync } from 'type-graphql'
import { resolvers } from '@schema'

import { ActerResolver } from 'api/resolvers/acter'
import { SearchResolver } from 'api/resolvers/search'

import { authChecker } from 'api/auth-checker'

export const schema = buildSchemaSync({
  authChecker,
  resolvers: [...resolvers, ActerResolver, SearchResolver],
  validate: false,
  dateScalarMode: 'isoDate',
})
