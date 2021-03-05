import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

import { getToken } from 'src/lib/next-auth/jwt'

import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { schema } from 'graphql/schema'
const prisma = new PrismaClient()

const server = new ApolloServer({
  schema,
  context: async ({ req }): Promise<ActerGraphQLContext> => {
    const token = await getToken(req)
    return {
      token,
      prisma,
    }
  },
})
const handler = server.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
