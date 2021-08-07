import 'reflect-metadata'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import prisma from '@acter/schema/prisma'
import { initSentry } from '@acter/lib/sentry'
import { getSession } from '@auth0/nextjs-auth0'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

import { schema } from '@acter/schema/schema'

initSentry()

export const config = {
  api: {
    bodyParser: false,
  },
}

let apolloServer
const server = new ApolloServer({
  schema,
  context: ({ req, res }): ActerGraphQLContext => {
    const session = getSession(req, res)
    return {
      session,
      prisma,
    }
  },
})

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Only start the server once
  if (typeof apolloServer === 'undefined') {
    await server.start()
    apolloServer = server
  }
  const handler = apolloServer.createHandler({ path: '/api/graphql' })
  return handler(req, res)
}
