import { SyncAuth0IntercomData } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { SYNC_AUTH0_INTERCOM_DATA } from '@acter/lib/constants'

export const syncAuth0IntercomQueue = createQueue<SyncAuth0IntercomData>(
  SYNC_AUTH0_INTERCOM_DATA
)
