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

interface CreateLinkOptions
  extends UseMutationOptions<CreateLinkData, LinkVariables> {
  onCompleted: (CreateLinkData) => LinkType[] | void
}

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

/**
 * Custom hook that creates a new link
 * @param link
 * @returns handle method to create a new link
 * @returns mutation results from apollo
 */
export const useCreateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  options?: CreateLinkOptions
): [HandleMethod<CreateLinkData>, MutationResult] => {
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

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    onCompleted: (result) => {
      const { createLink: newLink } = result

      const newDisplayLinks = [...displayLinks, newLink]

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newDisplayLinks)

      return newDisplayLinks
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
