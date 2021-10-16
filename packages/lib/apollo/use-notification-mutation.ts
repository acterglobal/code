import { useEffect } from 'react'
import { di } from 'react-magnetic-di/macro'

import { DocumentNode } from 'graphql/language/ast'
import { useSnackbar } from 'notistack'
import {
  CombinedError,
  TypedDocumentNode,
  useMutation,
  UseMutationResponse,
} from 'urql'

export interface UseMutationOptions<TData, TVariables> {
  variables?: TVariables
  onError?: (error: CombinedError) => void
  getErrorMessage?: (data: CombinedError) => string
  onCompleted?: (data: TData) => void
  getSuccessMessage?: (data: TData) => string
}

/**
 * Wrapper function for Apollo GraphQL's useMutation() function that adds
 * notifications via notistack
 * @param mutation The GraphQL mutation function
 * @param options Apollo mutation options
 * @returns The same thing that ApolloGraphQL's useMutation() function does
 */
export const useNotificationMutation = <
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  TData = any,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  TVariables = any
>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables> | string,
  options?: UseMutationOptions<TData, TVariables>
): UseMutationResponse<TData, TVariables> => {
  di(useSnackbar)
  const { enqueueSnackbar } = useSnackbar()
  const { getErrorMessage, getSuccessMessage, ...restOptions } = options || {}
  const [result, runMutation] = useMutation<TData, TVariables>(mutation)

  const { data, error } = result

  useEffect(() => {
    if (error) {
      const message =
        typeof getErrorMessage === 'function'
          ? getErrorMessage(error)
          : error.message
      enqueueSnackbar(message, { variant: 'error' })
      restOptions?.onError?.(error)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      const message =
        typeof getSuccessMessage === 'function'
          ? getSuccessMessage(data)
          : 'Success'
      enqueueSnackbar(message, { variant: 'success' })
      restOptions?.onCompleted?.(data)
    }
  }, [data])

  return [result, runMutation]
}
