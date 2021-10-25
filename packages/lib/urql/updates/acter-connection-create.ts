import { UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import { setCacheConnection } from '@acter/lib/urql/util/set-cache-connection'
import { ActerConnection } from '@acter/schema'

type ActerConenectionWithType = WithTypeName<ActerConnection>

interface ActerConenectionData {
  createActerConnectionCustom: ActerConenectionWithType
}

export const createActerConnectionCustom: UpdateResolver<ActerConenectionData> = (
  result,
  _args,
  cache,
  _info
) => {
  const connection = result.createActerConnectionCustom
  setCacheConnection({
    cache,
    onActer: connection.Follower,
    onFieldName: 'Following',
    connection,
  })

  setCacheConnection({
    cache,
    onActer: connection.Following,
    onFieldName: 'Follower',
    connection,
  })
}
