import { HasActer, WithTypeName, WithWhereActerId } from "@acter/lib/urql/types"
import { Cache, Data, NullArray, Variables } from "@urql/exchange-graphcache"

interface MatchArgs<Data> {
  result: HasActer<Data>
  fieldArgs: Variables
}

type Match = <Data>(args: MatchArgs<Data>) => boolean
interface FnArgs {
  fieldArgs: Variables
  fieldKey: string
  items: NullArray<string>
}

type Fn = (args: FnArgs) => void

interface ForEachQueryFields<Data> {
  result: HasActer<Data>
  cache: Cache
  fieldNameMatch: string
  match?: Match
  fn: Fn
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
      const items = <NullArray<string>>cache.resolve('Query', fieldKey)
      fn({fieldArgs, fieldKey, items})
    }
  })
}

export const matchOnActerId = <Data>({result, fieldArgs}: MatchArgs<Data>): boolean => {
  const acterId = result.Acter?.id
  if (!acterId) return
  return (<WithWhereActerId>fieldArgs).where?.acterId?.equals === acterId
}

interface ItemFnArgs<Data> {
  cache: Cache,
  result: HasActer<Data>,
}

type ItemFn = <Data>(args: ItemFnArgs<Data>) => Fn

export const prependItemFn: ItemFn = ({cache, result}) => ({ fieldKey, items }) => {
  cache.link('Query', fieldKey, [result, ...items] as NullArray<string>)
}

export const updateItemFn: ItemFn = ({cache, result}) => ({fieldKey, items}) => {
  const resultKey = cache.keyOfEntity(result as WithTypeName)
  const newItems = items.map((itemKey) => {
    if (itemKey === resultKey) {
      return result
    }
    return itemKey
  })
  cache.link('Query', fieldKey, newItems as NullArray<string | Data>)
}

export const removeItemFn: ItemFn = ({cache, result}) => <TType>({fieldKey, items}) => {
  const key = cache.keyOfEntity(result as unknown as WithTypeName<TType>)
  const list = items.filter((item) => item !== key) as NullArray<string>
  cache.link('Query', fieldKey, list)
}