import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'

import {
  forEachQueryFields,
  removeItemFn,
} from '@acter/lib/urql/util/query-fields-for-each'
import { Notification } from '@acter/schema'

type NotificationWithType = WithTypeName<Notification>

interface NotificationData {
  deleteNotification?: NotificationWithType
}

export const deleteNotification: UpdateResolver<NotificationData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.deleteNotification,
    fieldNameMatch: 'links',
    fn: removeItemFn<Notification>({
      cache,
      result: result.deleteNotification,
    }),
  })
  cache.invalidate((result.deleteNotification as unknown) as Data)
}
