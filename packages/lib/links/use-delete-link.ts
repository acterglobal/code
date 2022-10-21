import { OperationResult, UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Link as LinkType } from '@acter/schema'
import DELETE_LINK from '@acter/schema/mutations/delete-link.graphql'

export type LinkVariables = LinkType & {
  linkId: string
}

type DeleteLinkData = { deleteOneLink: LinkType }

type DeleteLinkOptions = UseMutationOptions<DeleteLinkData, LinkVariables>

export type HandleMethod<TData> = (
  link: LinkType | TData
) => Promise<OperationResult<DeleteLinkData, LinkVariables>>

/**
 * Custom hook that deletes a link
 * @param displayLinks - current list of links that belong this the acter
 * @param options - mutation options e.g. data or variables
 * @returns updated list of links without deleted link
 */

export const useDeleteLink = (
  options?: DeleteLinkOptions
): [
  UseMutationState<DeleteLinkData, LinkVariables>,
  HandleMethod<DeleteLinkData>
] => {
  const { t } = useTranslation('success-messages')

  const [mutationResult, deleteOneLink] = useNotificationMutation<
    DeleteLinkData,
    LinkVariables
  >(DELETE_LINK, {
    ...options,
    getSuccessMessage: (data) =>
      t('link.deleted', { linkName: data.deleteOneLink.name }),
  })

  const handleDeleteLink = async (values: LinkVariables) =>
    deleteOneLink({
      ...values,
      linkId: values.id,
    })

  return [mutationResult, handleDeleteLink]
}
