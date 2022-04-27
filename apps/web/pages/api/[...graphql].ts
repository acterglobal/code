import 'reflect-metadata'

import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { getApiHandler } from '@acter/api'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const graphqlHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const handler = getApiHandler('/api/graphql')
  return handler(req, res)
}

export default withSentry(graphqlHandler)
