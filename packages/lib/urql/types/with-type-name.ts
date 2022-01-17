//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithTypeName<T = Record<string, any>> = T & {
  __typename: string
}
