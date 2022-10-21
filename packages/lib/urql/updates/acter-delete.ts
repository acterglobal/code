import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import {
  forEachQueryFields,
  removeItemFn,
} from '@acter/lib/urql/util/query-fields-for-each'
import { Acter, Activity } from '@acter/schema'

type ActerData = {
  deleteOneActerCustom?: WithTypeName<Acter>
}

export const deleteOneActerCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.deleteOneActerCustom,
    fieldNameMatch: 'activities',
    fn: removeItemFn<Activity>({
      cache,
      result: result.deleteOneActerCustom.Activity,
    }),
  })
  cache.invalidate((result.deleteOneActerCustom as unknown) as Data)
}
