import { OperationResult, UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, Link as LinkType } from '@acter/schema'
import CREATE_LINK from '@acter/schema/mutations/link-create.graphql'

export type LinkVariables = LinkType & {
  acterId: string
  userId: string
}

type CreateLinkData = { createOneLink: LinkType }

type CreateLinkOptions = UseMutationOptions<CreateLinkData, LinkVariables>

export type HandleMethod<TData> = (
  link: LinkType | TData
) => Promise<OperationResult<CreateLinkData, LinkVariables>>

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
): [
  UseMutationState<CreateLinkData, LinkVariables>,
  HandleMethod<CreateLinkData>
] => {
  const { t } = useTranslation('success-messages')
  const { user } = useUser()

  const [mutationResult, createOneLink] = useNotificationMutation<
    CreateLinkData,
    LinkVariables
  >(CREATE_LINK, {
    ...options,
    getSuccessMessage: ({ createOneLink: { name } }) =>
      t('link.created', { linkName: name }),
  })

  const handleLink = async (values: LinkVariables) => {
    if (!user) throw 'User is not set'

    return createOneLink({
      ...values,
      acterId: acter.id,
      userId: user?.id,
    })
  }
  return [mutationResult, handleLink]
}
