type WithId = {
  id: unknown
}

export const getObjectArrayMemoString = (
  results: unknown,
  prefix = ''
): string => {
  if (!results) return ''
  if (Array.isArray(results)) {
    return results
      .map((result) => getObjectArrayMemoString(result, prefix))
      .join(',')
  }
  if (typeof results === 'object') {
    const objectId = (results as WithId).id || ''
    return Object.values(results)
      .reduce(
        (state, value) => {
          if (!Array.isArray(value)) return [`${prefix}${state}`]
          return [
            ...state,
            getObjectArrayMemoString(value, `${prefix}${objectId}.`),
          ]
        },
        [objectId]
      )
      .join(',')
  }
  return `${prefix}${results}`
}
