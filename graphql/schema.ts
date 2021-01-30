import { buildSchemaSync } from 'type-graphql'
import { resolvers } from '@generated/type-graphql'

import { ActerResolver } from 'graphql/resolvers/acter'

import { authChecker } from 'graphql/auth-checker'

export const schema = buildSchemaSync({
  authChecker,
  resolvers: [...resolvers, ActerResolver],
  validate: false,
})
