import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { dailyDigestCronWorker } from '@acter/jobs/daily-digest/cron-worker'

const digestHandler = (req: NextApiRequest, res: NextApiResponse): void => {
  dailyDigestCronWorker()

  res.status(200).send('ok')
}

export default withSentry(digestHandler)
