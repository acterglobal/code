import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import prisma from '@acter/lib/prisma'
import { initSentry } from '@acter/lib/sentry'
import { getSession } from '@auth0/nextjs-auth0'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

import { schema } from 'api/schema'

initSentry()

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
const handler = server.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
