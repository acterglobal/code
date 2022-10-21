import { UpdateResolver } from '@urql/exchange-graphcache'

import { forEachQueryFields, removeItemFn } from '../util/query-fields-for-each'
import { LinkWithType } from './link-create'

import { Link } from '@acter/schema'

type LinkData = {
  deleteOneLink?: LinkWithType
}

export const deleteOneLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.deleteOneLink,
    fieldNameMatch: 'links',
    fn: removeItemFn<Link>({ cache, result: result.deleteOneLink }),
  })
}
