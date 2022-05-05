import 'reflect-metadata'

import { GraphQLSchema } from 'graphql/type'
import { buildSchema } from 'type-graphql'

import { logger } from '@acter/lib/logger'

import { authChecker } from './auth-checker'
import {
  resolvers,
  applyResolversEnhanceMap,
  resolversEnhanceMap,
} from './resolvers'

let schema

export const generateSchema = async (
  _writeSchema = false
): Promise<GraphQLSchema> => {
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
    timer.done({ message: 'Schema built' })
  }
  timer.done({ message: 'Schema found, reusing' })

  return schema
}
