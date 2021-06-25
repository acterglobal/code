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

export type HandleMethod = (values: unknown) => Promise<void>

export type DeleteLinkOptions = UseMutationOptions<
  DeleteLinkData,
  LinkVariables
>

/**
 * Custom hook that deletes a link
 * @param link
 * @returns handle method to delete a link
 * @returns mutation results from apollo
 */
export const useDeleteLink = (
  displayLinks: LinkType[],
  onComplete: (links: LinkType[]) => void,
  options?: DeleteLinkOptions
): [HandleMethod, MutationResult] => {
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
      onComplete(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link deleted',
  })

  const handleDeleteLink = async (values) => {
    deleteLink({
      variables: {
        ...values,
        linkId: values.id,
      },
    })
  }

  return [handleDeleteLink, mutationResult]
}
