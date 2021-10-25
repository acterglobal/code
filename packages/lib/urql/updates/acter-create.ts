import { UpdateResolver } from '@urql/exchange-graphcache'

import { setCacheConnection } from '../util/set-cache-connection'

import { WithTypeName } from '@acter/lib/urql/types'
import { Acter } from '@acter/schema'

export type ActerWithType = WithTypeName<Acter>

interface ActerData {
  createActerCustom?: ActerWithType
}

export const createActerCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  result.createActerCustom.Followers.forEach((connection) => {
    setCacheConnection({
      cache,
      onActer: connection.Follower,
      onFieldName: 'Following',
      connection,
    })
  })
}
