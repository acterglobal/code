//eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const getObjectArrayMemoString = (results: any): string =>
  results && Array.isArray(results) ? results.map((r) => r.id).join(',') : null
