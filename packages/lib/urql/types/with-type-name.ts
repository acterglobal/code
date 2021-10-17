export type WithTypeName<T> = T & {
  __typename: string
}
