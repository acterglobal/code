import { ApolloServer } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client'

import { getToken, JWTToken } from 'src/lib/next-auth/jwt'

import { schema } from 'graphql/schema'
export interface ActerGraphQLContext {
  prisma: PrismaClient
  token: JWTToken
}
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
