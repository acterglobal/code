import 'reflect-metadata'

import type { NextApiHandler } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

import { ApolloServer } from 'apollo-server-micro'

import { logger } from '@acter/lib/logger'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { prisma } from '@acter/schema/prisma'

import { generateSchema } from './generate-schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

let server: ApolloServer

export const getApiHandler =
  (path: string): NextApiHandler =>
  async (req, res): Promise<void> => {
    // Only start the server once
    const timer = logger.startTimer()
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
      timer.done({ message: 'Apollo server started' })
    } else {
      timer.done({ message: 'Apollo server already exists and will be reused' })
    }

    const handler = server.createHandler({ path })
    return handler(req, res)
  }
