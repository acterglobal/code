import { stringifyVariables } from '@urql/core'
import { Resolver, Variables, NullArray } from '@urql/exchange-graphcache'

export type MergeMode = 'before' | 'after'

export interface PaginationParams {
  cursorArgument?: string
  takeArgument?: string
  mergeMode?: MergeMode
}

export const prismaPagination = ({
  cursorArgument = 'cursor',
  takeArgument = 'take',
  mergeMode = 'after',
}: //eslint-disable-next-line @typescript-eslint/no-explicit-any
PaginationParams = {}): Resolver<any, any, any> => {
  const compareArgs = (
    fieldArgs: Variables,
    connectionArgs: Variables
  ): boolean => {
    for (const key in connectionArgs) {
      if (key === cursorArgument || key === takeArgument) {
        continue
      } else if (!(key in fieldArgs)) {
        return false
      }

      const argA = fieldArgs[key]
      const argB = connectionArgs[key]

      if (
        typeof argA !== typeof argB || typeof argA !== 'object'
          ? argA !== argB
          : stringifyVariables(argA) !== stringifyVariables(argB)
      ) {
        return false
      }
    }

    for (const key in fieldArgs) {
      if (key === cursorArgument || key === takeArgument) {
        continue
      }
      if (!(key in connectionArgs)) return false
    }

    return true
  }

  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info

    const allFields = cache.inspectFields(entityKey)
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName)
    const size = fieldInfos.length
    if (size === 0) {
      return undefined
    }

    const visited = new Set()
    let result: NullArray<string> = []

    for (let i = 0; i < size; i++) {
      const { fieldKey, arguments: args } = fieldInfos[i]
      if (args === null || !compareArgs(fieldArgs, args)) {
        continue
      }

      const links = cache.resolve(entityKey, fieldKey) as string[]

      if (links === null || links.length === 0) {
        continue
      }

      const tempResult: NullArray<string> = []

      for (let j = 0; j < links.length; j++) {
        const link = links[j]
        if (visited.has(link)) continue
        tempResult.push(link)
        visited.add(link)
      }

      if (mergeMode === 'after') {
        result = [...result, ...tempResult]
      } else {
        result = [...tempResult, ...result]
      }
    }

    const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs)
    if (hasCurrentPage) {
      return result
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if (!(info as any).store.schema) {
      return undefined
    } else {
      info.partial = true
      return result
    }
  }
}
