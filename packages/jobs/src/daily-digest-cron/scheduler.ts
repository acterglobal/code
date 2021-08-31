import { createScheduler } from '@acter/lib/bullmq'
import { DAILY_DIGEST_CRON } from '@acter/lib/constants'

export const dailyDigestQueueScheduler = createScheduler(DAILY_DIGEST_CRON)
