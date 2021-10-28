import 'reflect-metadata'

import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { ApolloServer } from 'apollo-server-micro'

import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { generateSchema } from '@acter/schema/generate-schema'
import { prisma } from '@acter/schema/prisma'

export const config = {
  api: {
    bodyParser: false,
  },
}

let server: ApolloServer

const graphqlHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Only start the server once
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
  } else {
    console.log('Apollo server already exists')
  }

  const handler = server.createHandler({ path: '/api/graphql' })
  return handler(req, res)
}

export default withSentry(graphqlHandler)
