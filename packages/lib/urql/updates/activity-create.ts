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
  createOneActivityCustom?: ActivityWithType
}

const { ALL, PAST, UPCOMING } = ActivitiesDateFilter

export const createOneActivityCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.createOneActivityCustom.Acter.Followers.forEach((connection) => {
    const activityDateFilters =
      new Date(result.createOneActivityCustom.startAt) > new Date()
        ? [ALL, UPCOMING]
        : [ALL, PAST]

    forEachQueryFields({
      cache,
      result: result.createOneActivityCustom,
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
      fn: prependItemFn({ cache, result: result.createOneActivityCustom }),
    })
  })
}
