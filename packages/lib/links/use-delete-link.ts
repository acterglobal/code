import { MutationResult, StoreObject } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Link as LinkType } from '@acter/schema'
import DELETE_LINK from '@acter/schema/mutations/delete-link.graphql'

export type LinkVariables = LinkType & {
  linkId: string
}

type DeleteLinkData = { deleteLink: LinkType }

type DeleteLinkOptions = UseMutationOptions<DeleteLinkData, LinkVariables>

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

/**
 * Custom hook that deletes a link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links without deleted link
 */

export const useDeleteLink = (
  options?: DeleteLinkOptions
): [HandleMethod<DeleteLinkData>, MutationResult] => {
  const [deleteLink, mutationResult] = useNotificationMutation<
    DeleteLinkData,
    LinkVariables
  >(DELETE_LINK, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { deleteLink: deletedLink },
      } = result

      cache.modify({
        id: cache.identify((deletedLink as unknown) as StoreObject),
        fields: (_, { DELETE }) => DELETE,
      })
    },

    getSuccessMessage: () => 'Link deleted',
  })

  const handleDeleteLink = async (values: LinkVariables) => {
    deleteLink({
      variables: {
        ...values,
        linkId: values.id,
      },
    })
  }

  return [handleDeleteLink, mutationResult]
}
