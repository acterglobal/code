import { OperationResult, UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, Link as LinkType } from '@acter/schema'
import UPDATE_LINK from '@acter/schema/mutations/link-update.graphql'

export type LinkVariables = LinkType & {
  linkId: string
  acterId: string
  userId: string
}

type UpdateLinkData = { updateOneLink: LinkType }

type UpdateLinkOptions = UseMutationOptions<UpdateLinkData, LinkVariables>

export type HandleMethod<TData> = (
  link: LinkType | TData
) => Promise<OperationResult<UpdateLinkData, LinkVariables>>

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
): [
  UseMutationState<UpdateLinkData, LinkVariables>,
  HandleMethod<UpdateLinkData>
] => {
  const { t } = useTranslation('success-messages')

  const { user } = useUser()
  const [mutationResult, updateOneLink] = useNotificationMutation<
    UpdateLinkData,
    LinkVariables
  >(UPDATE_LINK, {
    ...options,
    getSuccessMessage: () => t('link.updated'),
  })

  const handleLink = async (values: LinkVariables) => {
    if (!user) throw 'User is not set'

    return updateOneLink({
      ...values,
      linkId: values.id,
      acterId: acter.id,
      userId: user?.id,
    })
  }
  return [mutationResult, handleLink]
}
