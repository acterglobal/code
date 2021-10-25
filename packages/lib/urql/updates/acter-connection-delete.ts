import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import { ActerConnection } from '@acter/schema'

type ActerConnectionData = {
  deleteActerConnection: WithTypeName<ActerConnection>
}

export const deleteActerConnection: UpdateResolver<ActerConnectionData> = (
  result,
  _args,
  cache,
  _info
) => {
  cache.invalidate((result.deleteActerConnection as unknown) as Data)
}
