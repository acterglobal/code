import { Reference, StoreObject } from '@apollo/client'
import { Modifier } from '@apollo/client/cache/core/types/common'

interface TypeWithId {
  id: string
}

export const addToCacheList = (data: TypeWithId): Modifier<Reference[]> => (
  prev,
  { readField, toReference }
) =>
  prev.some((ref) => readField('id', ref) === data.id)
    ? prev
    : [...prev, toReference((data as unknown) as StoreObject)]
