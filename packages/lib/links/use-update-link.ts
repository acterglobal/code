import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
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
 * @param acter updated link belongs to
 * @param user that updates the link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links with updated link
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

  const handleLink = async (values: LinkVariables) => {
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
