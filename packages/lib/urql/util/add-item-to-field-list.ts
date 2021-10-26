import { Cache, Data, NullArray } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'

interface AddItemToFieldListParams<Target, Item> {
  cache: Cache
  target: Target
  field: string
  item: Item
  prepend?: boolean
}

export const addItemToFieldList = <TTarget, TItem>({
  cache,
  target,
  field,
  item,
  prepend = false,
}: AddItemToFieldListParams<TTarget, TItem>): void => {
  const Target = cache.keyOfEntity({ ...(target as WithTypeName<TTarget>) })
  const Item = cache.keyOfEntity({ ...(item as WithTypeName<TItem>) })
  cache.inspectFields(Target).forEach(({ fieldName, fieldKey }) => {
    if (fieldName === field) {
      const list = [
        ...[prepend ? Item : undefined],
        ...(cache.resolve(Target, fieldKey) as NullArray<string>),
        ...[prepend ? undefined : Item],
      ]
      cache.link(Target, fieldKey, list as NullArray<string | Data>)
    }
  })
}
