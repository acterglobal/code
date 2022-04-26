import 'reflect-metadata'

import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { ApolloServer } from 'apollo-server-micro'

import { getLogger } from '@acter/lib/logger'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { generateSchema } from '@acter/schema/generate-schema'
import { prisma } from '@acter/schema/prisma'

export const config = {
  api: {
    bodyParser: false,
  },
}

let server: ApolloServer

const l = getLogger('graphqlHandler')

const graphqlHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Only start the server once
  const timer = l.startTimer()
  l.debug('Hello world')
  if (!server) {
    const schema = await generateSchema()
    server = new ApolloServer({
      schema,
      context: ({ req, res }): ActerGraphQLContext => {
        const session = getSession(req, res)
        return {
          session,
          prisma,
        }
      },
    })
    await server.start()
    timer.done('built Apollo server')
  } else {
    timer.done('Apollo server already exists')
  }

  const handler = server.createHandler({ path: '/api/graphql' })
  return handler(req, res)
}

export default withSentry(graphqlHandler)
