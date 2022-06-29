import { UpdateResolver } from '@urql/exchange-graphcache'

import { forEachQueryFields, updateItemFn } from '../util/query-fields-for-each'
import { ActivityWithType } from './activity-create'

interface ActerData {
  updateActivityCustom?: ActivityWithType
}

export const updateActivityCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.updateActivityCustom.Acter.Followers.forEach((connection) => {
    forEachQueryFields({
      cache,
      result: result.updateActivityCustom,
      fieldNameMatch: 'activities',
      match: ({ fieldArgs }) => {
        return (
          // @ts-ignore mocking this would be a pain
          fieldArgs.where?.Acter?.is?.Followers?.some?.Follower?.is?.id
            ?.equals === connection.Follower.id
        )
      },
      fn: updateItemFn({ cache, result: result.updateActivityCustom }),
    })
  })
}
