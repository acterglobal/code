import { Data, NullArray, UpdateResolver } from '@urql/exchange-graphcache'

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
  // 1. For each follower of the new Acter we're creating
  result.createActerCustom.Followers.forEach((connection) => {
    // 2. Read all of the cache fields to find the 'Follower' ones
    // Spread and cast because https://stackoverflow.com/questions/60697214/how-to-fix-index-signature-is-missing-in-type-error
    const Follower = connection.Follower as ActerWithType
    cache.inspectFields({ ...Follower }).forEach(({ fieldName, fieldKey }) => {
      if (fieldName === 'Following') {
        const list = [
          ...(cache.resolve({ ...Follower }, fieldKey) as NullArray<string>),
          { ...connection },
        ]
        cache.link({ ...Follower }, fieldKey, list as NullArray<string | Data>)
      }
    })
  })
}
