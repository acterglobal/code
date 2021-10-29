import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'

import { Acter } from '@acter/schema'

type ActerData = {
  deleteActerCustom?: WithTypeName<Acter>
}

export const deleteActerCustom: UpdateResolver<ActerData> = (
  result,
  _args,
  cache,
  _info
) => {
  cache.invalidate((result.deleteActerCustom as unknown) as Data)
}
