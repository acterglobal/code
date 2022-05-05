import 'reflect-metadata'

import { GraphQLSchema } from 'graphql/type'
import { buildSchema } from 'type-graphql'

import { getLogger } from '@acter/lib/logger/logger'

import { authChecker } from './auth-checker'
import {
  resolvers,
  applyResolversEnhanceMap,
  resolversEnhanceMap,
} from './resolvers'

let schema
const l = getLogger('generateSchema')

export const generateSchema = async (
  _writeSchema = false
): Promise<GraphQLSchema> => {
  const timer = l.startTimer()

  applyResolversEnhanceMap(resolversEnhanceMap)

  const timer = logger.startTimer()
  if (!schema) {
    // const generatedPath = path.join(__dirname, 'generated')
    // const graphQLSchemaFilename = path.join(generatedPath, 'schema.graphql')
    schema = await buildSchema({
      authChecker,
      resolvers,
      validate: false,
      dateScalarMode: 'isoDate',
      // emitSchemaFile: schemaExists ? false : graphQLSchemaFilename,
      // emitSchemaFile: writeSchema ? graphQLSchemaFilename : false,
    })
    timer.done('built schema')
  } else {
    timer.done('using existing schema')
  }
  timer.done({ message: 'Schema found, reusing' })

  return schema
}
