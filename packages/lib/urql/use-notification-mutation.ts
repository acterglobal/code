import { useEffect } from 'react'

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
 * Wrapper function for Urql's useMutation() function that adds
 * notifications via notistack
 * @param mutation The GraphQL mutation function
 * @param options Urql mutation options
 * @returns The same thing that Urql's useMutation() function does
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
  }, [JSON.stringify(data)])

  return [result, runMutation]
}
