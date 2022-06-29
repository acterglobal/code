import { UpdateResolver } from '@urql/exchange-graphcache'

import { ActivitiesDateFilter } from '@acter/lib/constants'
import { WithTypeName } from '@acter/lib/urql/types'
import { Activity } from '@acter/schema'

import {
  forEachQueryFields,
  prependItemFn,
} from '../util/query-fields-for-each'

export type ActivityWithType = WithTypeName<Activity>

interface ActerData {
  createActivityCustom?: ActivityWithType
}

const { ALL, PAST, UPCOMING } = ActivitiesDateFilter

export const createActivityCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.createActivityCustom.Acter.Followers.forEach((connection) => {
    const activityDateFilters =
      new Date(result.createActivityCustom.startAt) > new Date()
        ? [ALL, UPCOMING]
        : [ALL, PAST]

    forEachQueryFields({
      cache,
      result: result.createActivityCustom,
      fieldNameMatch: 'activities',
      match: ({ fieldArgs }) => {
        return (
          // @ts-ignore mocking this would be a pain
          fieldArgs.followerId === connection.Follower.id &&
          activityDateFilters.includes(
            fieldArgs.dateFilter as ActivitiesDateFilter
          )
        )
      },
      fn: prependItemFn({ cache, result: result.createActivityCustom }),
    })
  })
}
