import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import CREATE_LINK from 'api/mutations/link-create.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type LinkVariables = LinkType & {
  acterId: string
  userId: string
}

type CreateLinkData = {
  createLink: LinkType
}

export type HandleMethod = (values: unknown) => Promise<void>

export type CreateLinkOptions = UseMutationOptions<
  CreateLinkData,
  LinkVariables
>

/**
 * Custom hook that creates new link
 * @param link
 * @returns handle method to create and update link
 * @returns mutation results from apollo
 */
export const useCreateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  onComplete: (links: LinkType[]) => void,
  options?: CreateLinkOptions
): [HandleMethod, MutationResult] => {
  const [createLink, mutationResult] = useNotificationMutation<
    CreateLinkData,
    LinkVariables
  >(CREATE_LINK, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { createLink: newLink },
      } = result

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

  const handleLink = async (
    values: LinkType & { acterId: string; userId: string }
  ) => {
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
