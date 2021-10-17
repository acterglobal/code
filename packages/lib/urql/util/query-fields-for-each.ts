import { HasActer, WithWhereActerId } from "@acter/lib/urql/types"
import { Cache, NullArray, Variables } from "@urql/exchange-graphcache"

interface MatchArgs {
  acterId: string
  fieldArgs: Variables
  fieldName: string
  fieldNameMatch: string
}

interface FnArgs<Data> {
  fieldArgs: Variables
  fieldKey: string
  items: NullArray<Data>
}

interface ForEachQueryFields<Data> {
  result: HasActer<Data>
  cache: Cache
  fieldNameMatch: string
  match?: (args: MatchArgs) => boolean
  fn: (args: FnArgs<Data>) => void
}

export const forEachQueryFields = <Data>({
  cache,
  result,
  fieldNameMatch,
  match = ({acterId, fieldNameMatch, fieldArgs, fieldName}) => fieldName === fieldNameMatch && 
  (<WithWhereActerId>fieldArgs).where?.acterId?.equals === acterId,
  fn
}: ForEachQueryFields<Data>): void => {
  const acterId = result.Acter?.id
  if (!acterId) return

  const queryFields = cache.inspectFields('Query')

  queryFields.forEach(({ fieldName, arguments: fieldArgs , fieldKey }) => {
    if (match({acterId, fieldArgs, fieldName, fieldNameMatch})) {
      const items = <NullArray<Data>>cache.resolve('Query', fieldKey)
      fn({fieldArgs, fieldKey, items})
    }
  })
}