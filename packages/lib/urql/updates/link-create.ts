import { UpdateResolver } from '@urql/exchange-graphcache'

import {
  forEachQueryFields,
  matchOnActerId,
  prependItemFn,
} from '../util/query-fields-for-each'

import { WithTypeName } from '@acter/lib/urql/types'
import { Link } from '@acter/schema'

export type LinkWithType = WithTypeName<Link>

interface LinkData {
  createLink?: LinkWithType
}

export const createLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.createLink,
    fieldNameMatch: 'links',
    match: matchOnActerId,
    fn: prependItemFn({ cache, result: result.createLink }),
  })
}
