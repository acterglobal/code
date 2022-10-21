import { UpdateResolver } from '@urql/exchange-graphcache'

import { addItemToFieldList } from '../util/add-item-to-field-list'

import { WithTypeName } from '@acter/lib/urql/types'
import { Acter } from '@acter/schema'

export type ActerWithType = WithTypeName<Acter>

interface ActerData {
  createOneActerCustom?: ActerWithType
}

export const createOneActerCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.createOneActerCustom.Followers.forEach((connection) => {
    addItemToFieldList({
      cache,
      target: connection.Follower,
      field: 'Following',
      item: connection,
    })
  })
}
