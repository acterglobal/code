import {
  useMutation,
  ApolloError,
  OperationVariables,
  DocumentNode,
  TypedDocumentNode,
  MutationHookOptions,
  MutationTuple,
} from '@apollo/client'

import { useSnackbar } from 'notistack'

export interface UseMutationOptions<TData, TVariables>
  extends MutationHookOptions<TData, TVariables> {
  variables?: TVariables
  getErrorMessage?: (data: ApolloError) => string
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
  TVariables = OperationVariables
>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: UseMutationOptions<TData, TVariables>
): MutationTuple<TData, TVariables> => {
  const { enqueueSnackbar } = useSnackbar()
  const { getErrorMessage, getSuccessMessage, ...restOptions } = options || {}
  return useMutation<TData, OperationVariables>(mutation, {
    ...restOptions,
    onError: (err) => {
      const message =
        typeof getErrorMessage === 'function'
          ? getErrorMessage(err)
          : err.message
      enqueueSnackbar(message, { variant: 'error' })
      if (typeof restOptions.onError === 'function') restOptions.onError(err)
    },
    onCompleted: (data) => {
      const message =
        typeof getSuccessMessage === 'function'
          ? getSuccessMessage(data)
          : 'Success'
      enqueueSnackbar(message, { variant: 'success' })
      if (typeof restOptions.onCompleted === 'function')
        restOptions.onCompleted(data)
    },
  })
}
