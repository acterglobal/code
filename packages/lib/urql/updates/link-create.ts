import { UpdateResolver, NullArray } from '@urql/exchange-graphcache'

import { Link } from '@acter/schema'
import { WithTypeName } from '@acter/lib/urql/types'
import { forEachQueryFields } from '../util/query-fields-for-each'

type LinkWithType = WithTypeName<Link>

interface LinkData {
  createLink?: LinkWithType
}

export const createLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({cache, result: result.createLink, fieldNameMatch: 'links', fn: ({fieldKey, items}) => {
    items.unshift(result.createLink)
    cache.link('Query', fieldKey, <NullArray<string>>items)
  }})
}
