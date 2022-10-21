import 'reflect-metadata'

import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { getApiHandler } from '@acter/api'
import { getLogger } from '@acter/lib/logger'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

let handler: NextApiHandler
const l = getLogger('api/graphql')

const graphqlHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void|unknown> => {
  const timer = l.startTimer()
  if (!handler) {
    handler = await getApiHandler('/api/graphql')
    timer.done({ msg: 'handler built' })
  } else {
    timer.done({ msg: 'reusing handler' })
  }
  return handler(req, res)
}

export default withSentry(graphqlHandler)
