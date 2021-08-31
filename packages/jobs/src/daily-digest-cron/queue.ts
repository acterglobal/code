import { createQueue } from '@acter/lib/bullmq'
import { DAILY_DIGEST_CRON } from '@acter/lib/constants'

export const dailyDigestCronQueue = createQueue(DAILY_DIGEST_CRON)
