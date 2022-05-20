import 'reflect-metadata'

import { buildSchemaSync } from 'type-graphql'

import { getLogger } from '@acter/lib/logger/logger'

import { authChecker } from './auth-checker'
import {
  resolvers,
  applyResolversEnhanceMap,
  resolversEnhanceMap,
} from './resolvers'

const t = getLogger('generateSchema').startTimer()
applyResolversEnhanceMap(resolversEnhanceMap)
const schema = buildSchemaSync({
  authChecker,
  resolvers,
  validate: false,
  dateScalarMode: 'isoDate',
})
t.done('schema generated')
export { schema }
