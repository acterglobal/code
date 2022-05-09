import 'reflect-metadata'

import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { getApiHandler } from '@acter/api'
import { logger } from '@acter/lib/logger'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

let handler: NextApiHandler
const l = logger.child({ label: 'api/graphql' })

const graphqlHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const timer = l.startTimer()
  if (!handler) {
    handler = await getApiHandler('/api/graphql')
    timer.done({ message: 'handler built' })
  } else {
    timer.done({ message: 'reusing handler' })
  }
  return handler(req, res)
}

export default withSentry(graphqlHandler)
