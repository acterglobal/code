import { UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import { Acter, Activity } from '@acter/schema'

import { addItemToFieldList } from '../util/add-item-to-field-list'
import {
  forEachQueryFields,
  prependItemFn,
} from '../util/query-fields-for-each'

export type ActivityWithType = WithTypeName<Activity>

interface ActerData {
  createActivityCustom?: ActivityWithType
}

export const createActivityCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.createActivityCustom.Acter.Followers.forEach((connection) => {
    forEachQueryFields({
      cache,
      result: result.createActivityCustom,
      fieldNameMatch: 'activities',
      match: ({ fieldArgs }) => {
        return (
          // @ts-ignore mocking this would be a pain
          fieldArgs.where?.Acter?.is?.Followers?.some?.Follower?.is?.id
            ?.equals === connection.Follower.id
        )
      },
      fn: prependItemFn({ cache, result: result.createActivityCustom }),
    })
  })

  const parent = result.createActivityCustom.Acter.Parent as WithTypeName<Acter>
  addItemToFieldList({
    cache,
    target: parent,
    field: 'ActivitiesOrganized',
    item: result.createActivityCustom,
  })
}
