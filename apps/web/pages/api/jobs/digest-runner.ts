import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { dailyDigestCronWorker } from '@acter/jobs/daily-digest/cron-worker'
import { getLogger } from '@acter/lib/logger'

const l = getLogger('digestHandler')

const digestHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    try {
      await dailyDigestCronWorker()

      res.status(200).send('ok')
    } catch (e) {
      l.error(e)
      res.status(400).send(e)
      throw e
    }
  }
}

export default withSentry(digestHandler)
