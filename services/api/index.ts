import 'reflect-metadata'

import type { NextApiHandler } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

import { ApolloServer } from 'apollo-server-micro'

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
    if (!server) {
      const timeStart = new Date().getTime()
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
      const timeEnd = new Date().getTime()
      console.debug(`Apollo server started in ${timeEnd - timeStart} ms`)
    }

    const handler = server.createHandler({ path })
    return handler(req, res)
  }
