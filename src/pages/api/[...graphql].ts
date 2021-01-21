import { ApolloServer } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

import { schema } from 'graphql/schema'

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
