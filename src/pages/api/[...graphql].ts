import { ApolloServer } from 'apollo-server-micro'
import { buildSchemaSync } from 'type-graphql'
import { PrismaClient } from '@prisma/client'

import { resolvers } from '@generated/type-graphql'
const schema = buildSchemaSync({
  resolvers,
  validate: false,
})

interface Context {
  prisma: PrismaClient
}
const prisma = new PrismaClient()

const server = new ApolloServer({
  schema,
  context: (): Context => ({ prisma }),
})
const handler = server.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
