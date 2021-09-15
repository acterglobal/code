import 'reflect-metadata'

import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { ApolloServer } from 'apollo-server-micro'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { prisma } from '@acter/schema/prisma'
import { schema } from '@acter/schema/schema'

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

const graphqlHandler = async (
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

export default withSentry(graphqlHandler)
