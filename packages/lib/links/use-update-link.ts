import { MutationResult } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, Link as LinkType } from '@acter/schema'
import UPDATE_LINK from '@acter/schema/mutations/link-update.graphql'

export type LinkVariables = LinkType & {
  linkId: string
  acterId: string
  userId: string
}

type UpdateLinkData = { updateLink: LinkType }

type UpdateLinkOptions = UseMutationOptions<UpdateLinkData, LinkVariables>

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
  options?: UpdateLinkOptions
): [HandleMethod<UpdateLinkData>, MutationResult] => {
  const { user } = useUser()
  const [updateLink, mutationResult] = useNotificationMutation<
    UpdateLinkData,
    LinkVariables
  >(UPDATE_LINK, {
    ...options,
    getSuccessMessage: () => 'Link updated',
  })

  const handleLink = async (values: LinkVariables) => {
    if (!user) throw 'User is not set'

    updateLink({
      variables: {
        ...values,
        linkId: values.id,
        acterId: acter.id,
        userId: user?.id,
      },
    })
  }
  return [handleLink, mutationResult]
}
