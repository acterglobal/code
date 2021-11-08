import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import {
  forEachQueryFields,
  removeItemFn,
} from '@acter/lib/urql/util/query-fields-for-each'
import { Acter, Activity } from '@acter/schema'

type ActerData = {
  deleteActerCustom?: WithTypeName<Acter>
}

export const deleteActerCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.deleteActerCustom,
    fieldNameMatch: 'activities',
    fn: removeItemFn<Activity>({
      cache,
      result: result.deleteActerCustom.Activity,
    }),
  })
  cache.invalidate((result.deleteActerCustom as unknown) as Data)
}
