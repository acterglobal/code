import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { LinkWithType } from './link-create'

type LinkData = {
  deleteLink?: LinkWithType
}

export const deleteLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  cache.invalidate((result.deleteLink as unknown) as Data)
}
