import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import CREATE_LINK from 'api/mutations/link-create.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that creates and updates new link
 * @param link
 * @returns handle method to create and update link
 * @returns mutation results from apollo
 */
export const useCreateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  onComplete: (links: LinkType[]) => void
): [HandleMethod, MutationResult] => {
  const [createLink, mutationResult] = useNotificationMutation(CREATE_LINK, {
    update: (cache, { data }) => {
      const { createLink: newLink } = data

      const newDisplayLinks = [...displayLinks, newLink]

      onComplete(newDisplayLinks)

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link created',
  })

  const handleLink = async (values) => {
    createLink({
      variables: {
        ...values,
        acterId: acter.id,
        userId: user.id,
      },
    })
  }
  return [handleLink, mutationResult]
}
