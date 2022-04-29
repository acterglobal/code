import type { NextApiRequest, NextApiResponse } from 'next'

import { dailyDigestCronWorker } from '@acter/jobs/daily-digest/cron-worker'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  dailyDigestCronWorker()

  res.status(200).send('ok')
}
