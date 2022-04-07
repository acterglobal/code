import 'reflect-metadata'

import { GraphQLSchema } from 'graphql/type'
import path from 'path'
import { buildSchema } from 'type-graphql'

import { authChecker } from './auth-checker'
import {
  resolvers,
  applyResolversEnhanceMap,
  resolversEnhanceMap,
} from './resolvers'

let schema

export const generateSchema = async (
  writeSchema = false
): Promise<GraphQLSchema> => {
  applyResolversEnhanceMap(resolversEnhanceMap)

  if (!schema) {
    const generatedPath = path.join(__dirname, 'generated')
    const graphQLSchemaFilename = path.join(generatedPath, 'schema.graphql')
    const timeStart = new Date().getTime()
    schema = await buildSchema({
      authChecker,
      resolvers,
      validate: false,
      dateScalarMode: 'isoDate',
      // emitSchemaFile: schemaExists ? false : graphQLSchemaFilename,
      emitSchemaFile: writeSchema ? graphQLSchemaFilename : false,
    })
    const timeEnd = new Date().getTime()
    console.debug(`Schema built in ${timeEnd - timeStart} ms`)
  } else {
    console.debug('Using existing schema')
  }

  return schema
}
