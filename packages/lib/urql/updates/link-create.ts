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
  createOneLink?: LinkWithType
}

export const createOneLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.createOneLink,
    fieldNameMatch: 'links',
    match: matchOnActerId,
    fn: prependItemFn({ cache, result: result.createOneLink }),
  })
}
