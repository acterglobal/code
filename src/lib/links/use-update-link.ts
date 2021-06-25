import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import UPDATE_LINK from 'api/mutations/link-update.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that updates a link
 * @param link
 * @returns handle method to create and update link
 * @returns mutation results from apollo
 */
export const useUpdateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  onComplete: (links: LinkType[]) => void
): [HandleMethod, MutationResult] => {
  const [updateLink, mutationResult] = useNotificationMutation(UPDATE_LINK, {
    update: (cache, { data }) => {
      const { updateLink: newLink } = data

      const newDisplayLinks = displayLinks.map((link) => {
        if (link.id === newLink.id) {
          return newLink
        }
        return link
      })

      onComplete(newDisplayLinks)

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link updated',
  })

  const handleLink = async (values) => {
    updateLink({
      variables: {
        ...values,
        linkId: values.id,
        acterId: acter.id,
        userId: user.id,
      },
    })
  }
  return [handleLink, mutationResult]
}
