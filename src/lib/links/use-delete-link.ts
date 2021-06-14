import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import DELETE_LINK from 'api/mutations/delete-link.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Link as LinkType } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that deletes a link
 * @param link
 * @returns handle method to delete a link
 * @returns mutation results from apollo
 */
export const useDeleteLink = (
  displayLinks: LinkType[],
  setDisplayLinks: React.Dispatch<React.SetStateAction<LinkType[]>>
): [HandleMethod, MutationResult] => {
  const [deleteLink, mutationResult] = useNotificationMutation(DELETE_LINK, {
    update: (cache, { data }) => {
      const { deleteLink: deletedLink } = data
      const newDisplayLinks = displayLinks.filter(
        (link) => link.id !== deletedLink.id
      )
      setDisplayLinks(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link deleted',
  })

  const handleDeleteLink = async (id: unknown) => {
    deleteLink({
      variables: {
        linkId: id,
      },
    })
  }

  return [handleDeleteLink, mutationResult]
}
