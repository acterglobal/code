import { Cache, Data, NullArray } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import { Acter, ActerConnection } from '@acter/schema'

interface SetConnectionParams {
  cache: Cache
  onActer: Acter
  onFieldName: 'Follower' | 'Following'
  connection: ActerConnection
}

export const setCacheConnection = ({
  cache,
  onActer,
  onFieldName,
  connection,
}: SetConnectionParams): void => {
  const acter = onActer as WithTypeName<Acter>
  cache.inspectFields({ ...acter }).forEach(({ fieldName, fieldKey }) => {
    if (fieldName === onFieldName) {
      const list = [
        ...(cache.resolve({ ...acter }, fieldKey) as NullArray<string>),
        { ...connection },
      ]
      cache.link({ ...acter }, fieldKey, list as NullArray<string | Data>)
    }
  })
}
