import { HasActer, WithWhereActerId } from "@acter/lib/urql/types"
import { Cache, NullArray, Variables } from "@urql/exchange-graphcache"

interface MatchArgs<Data> {
  result: HasActer<Data>
  fieldArgs: Variables
}

type Match = <Data>(args: MatchArgs<Data>) => boolean
interface FnArgs<Data> {
  fieldArgs: Variables
  fieldKey: string
  items: NullArray<Data>
}

type Fn<Data> = (args: FnArgs<Data>) => void

interface ForEachQueryFields<Data> {
  result: HasActer<Data>
  cache: Cache
  fieldNameMatch: string
  match?: Match
  fn: Fn<Data>
}

export const forEachQueryFields = <Data>({
  cache,
  result,
  fieldNameMatch,
  match = () => true,
  fn
}: ForEachQueryFields<Data>): void => {
  const queryFields = cache.inspectFields('Query')

  queryFields.forEach(({ fieldName, arguments: fieldArgs , fieldKey }) => {
    if (fieldName === fieldNameMatch && match({result, fieldArgs})) {
      const items = <NullArray<Data>>cache.resolve('Query', fieldKey)
      fn({fieldArgs, fieldKey, items})
    }
  })
}

export const matchOnActerId = <Data>({result, fieldArgs}: MatchArgs<Data>): boolean => {
  const acterId = result.Acter?.id
  if (!acterId) return
  return (<WithWhereActerId>fieldArgs).where?.acterId?.equals === acterId
}

interface PrependFnArgs<Data> {
  cache: Cache,
  result: HasActer<Data>,
}

type PrependItemFn = <Data>(args: PrependFnArgs<Data>) => Fn<Data>

export const prependItemFn: PrependItemFn = ({cache, result}) => ({ fieldKey, items }) => {
  items.unshift(result)
  cache.link('Query', fieldKey, items as NullArray<string>)
}