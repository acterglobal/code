import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import DELETE_LINK from 'api/mutations/delete-link.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Link as LinkType } from '@schema'

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
 * @param displayLinks
 * @returns handle method to delete a link
 * @returns mutation results from apollo
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

  const handleDeleteLink = async (values: LinkType & { linkId: string }) => {
    deleteLink({
      variables: {
        ...values,
        linkId: values.id,
      },
    })
  }

  return [handleDeleteLink, mutationResult]
}
