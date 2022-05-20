import 'reflect-metadata'

import { NextApiHandler } from 'next'

import { Session } from '@auth0/nextjs-auth0'
import { createServer } from '@graphql-yoga/node'

import { getLogger } from '@acter/lib/logger'
import { prisma } from '@acter/schema/prisma'

import { schema } from './schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

let server: NextApiHandler

export const getApiHandler = (session: Session): NextApiHandler => {
  const t = getLogger('getApiHandler').startTimer()
  if (server) {
    t.done('server exists, reusing')
    return server
  }
  server = createServer({ schema, context: { prisma, session } })
  t.done('server created')
  return server
}
