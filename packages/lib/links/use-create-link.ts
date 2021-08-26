import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_LINK from '@acter/schema/mutations/link-create.graphql'
import LINK_FRAGMENT from '@acter/schema/fragments/link-display.fragment.graphql'
import { Acter, Link as LinkType } from '@acter/schema'
import { useUser } from '@acter/lib/user/use-user'

export type LinkVariables = LinkType & {
  acterId: string
  userId: string
}

type CreateLinkData = { createLink: LinkType }

type CreateLinkOptions = UseMutationOptions<CreateLinkData, LinkVariables>

export type HandleMethod<TData> = (link: LinkType | TData) => Promise<void>

/**
 * Custom hook that creates a new link
 * @param acter new link belongs to
 * @param user that creates the new link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links with new link
 */

export const useCreateLink = (
  acter: Acter,
  options?: CreateLinkOptions
): [HandleMethod<CreateLinkData>, MutationResult] => {
  const [createLink, mutationResult] = useNotificationMutation<
    CreateLinkData,
    LinkVariables
  >(CREATE_LINK, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { createLink: newLink },
      } = result

      cache.modify({
        fields: {
          links: (existingLinksRefs) => {
            const newLinkRef = cache.writeFragment({
              data: newLink,
              fragment: LINK_FRAGMENT,
              fragmentName: 'LinkDisplay',
            })
            return [...existingLinksRefs, newLinkRef]
          },
        },
      })
    },

    getSuccessMessage: () => 'Link created',
  })

  const [user] = useUser()

  const handleLink = async (values: LinkVariables) => {
    createLink({
      variables: {
        ...values,
        acterId: acter.id,
        userId: user?.id,
      },
    })
  }
  return [handleLink, mutationResult]
}
