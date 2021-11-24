import { Resolver } from '@urql/exchange-graphcache'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

export const parseDateField: Resolver = (parent, _args, _cache, info) =>
  parseDateOrString(parent[info.fieldName] as string)
