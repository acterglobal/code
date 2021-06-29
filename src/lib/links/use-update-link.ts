import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import UPDATE_LINK from 'api/mutations/link-update.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type LinkVariables = LinkType & {
  linkId: string
  acterId: string
  userId: string
}

type UpdateLinkData = {
  updateLink: LinkType
}

interface UpdateLinkOptions
  extends UseMutationOptions<UpdateLinkData, LinkVariables> {
  onCompleted: (UpdateLinkData) => LinkType[] | void
}

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

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
  options?: UpdateLinkOptions
): [HandleMethod<UpdateLinkData>, MutationResult] => {
  const getNewDisplayLinks = (displayLinks, updatedLink) => {
    const newDisplayLinks = displayLinks.map((link) => {
      if (link.id === updatedLink.id) {
        return updatedLink
      }
      return link
    })

    return newDisplayLinks
  }

  const [updateLink, mutationResult] = useNotificationMutation<
    UpdateLinkData,
    LinkVariables
  >(UPDATE_LINK, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { updateLink: updatedLink },
      } = result

      const newDisplayLinks = getNewDisplayLinks(displayLinks, updatedLink)

      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    onCompleted: (result) => {
      const { updateLink: updatedLink } = result

      const newDisplayLinks = getNewDisplayLinks(displayLinks, updatedLink)

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newDisplayLinks)

      return newDisplayLinks
    },
    getSuccessMessage: () => 'Link updated',
  })

  const handleLink = async (
    values: LinkType & { linkId: string; acterId: string; userId: string }
  ) => {
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
