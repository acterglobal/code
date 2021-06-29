import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_LINK from '@acter/schema/mutations/delete-link.graphql'
import GET_LINKS from '@acter/schema/queries/links-by-acter.graphql'
import { Link as LinkType } from '@acter/schema/types'

export type LinkVariables = LinkType & {
  linkId: string
}

type DeleteLinkData = {
  deleteLink: LinkType
}

interface DeleteLinkOptions
  extends UseMutationOptions<DeleteLinkData, LinkVariables> {
  onCompleted: (DeleteLinkData) => LinkType[] | void
}

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

/**
 * Custom hook that deletes a link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links without deleted link
 */

export const useDeleteLink = (
  displayLinks: LinkType[],
  options?: DeleteLinkOptions
): [HandleMethod<DeleteLinkData>, MutationResult] => {
  const [deleteLink, mutationResult] = useNotificationMutation<
    DeleteLinkData,
    LinkVariables
  >(DELETE_LINK, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { deleteLink: deletedLink },
      } = result

      const newDisplayLinks = displayLinks.filter(
        (link) => link.id !== deletedLink.id
      )

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    onCompleted: (result) => {
      const { deleteLink: deletedLink } = result

      const newDisplayLinks = displayLinks.filter(
        (link) => link.id !== deletedLink.id
      )

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newDisplayLinks)

      return newDisplayLinks
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
