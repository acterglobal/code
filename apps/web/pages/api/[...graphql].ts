import 'reflect-metadata'

import { NextApiHandler } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { getLogger } from '@acter/../packages/lib/logger'
import { getApiHandler } from '@acter/api'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const graphqlApiHandler: NextApiHandler = (req, res) => {
  const t = getLogger('graphqlApiHandler').startTimer()
  const session = getSession(req, res)
  const apiHandler = getApiHandler(session)
  const handlerWithSentry = withSentry(apiHandler)
  const handler = handlerWithSentry
  t.done('handler created')
  return handler(req, res)
}

export default graphqlApiHandler
