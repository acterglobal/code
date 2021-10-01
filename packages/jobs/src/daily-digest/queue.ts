import { createQueue } from '@acter/lib/bullmq'
import { DAILY_DIGEST_CREATE } from '@acter/lib/constants'
import { DailyDigest } from './types'

export const dailyDigestQueue = createQueue<DailyDigest>(DAILY_DIGEST_CREATE)
