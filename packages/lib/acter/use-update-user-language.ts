import { OperationContext, UseMutationState, OperationResult } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useNotificationMutation } from '@acter/lib/urql/use-notification-mutation'
import { Language } from '@acter/schema'
import UPDATE_USER_LANGUAGE from '@acter/schema/mutations/user-language-update.graphql'

type UpdateUserLanguageVariables = {
  email: string
  language: Language
}
type UpdateUserLanguageData = UpdateUserLanguageVariables
type HandleUpdateMethod = (
  variables?: UpdateUserLanguageVariables,
  context?: Partial<OperationContext>
) => Promise<
  OperationResult<UpdateUserLanguageVariables, UpdateUserLanguageVariables>
>
export const useUpdateUserLanguage = (): [
  UseMutationState<UpdateUserLanguageData, UpdateUserLanguageVariables>,
  HandleUpdateMethod
] => {
  const { t } = useTranslation('success-messages')
  const [mutationResult, updateUserLanguage] = useNotificationMutation<
    UpdateUserLanguageData,
    UpdateUserLanguageVariables
  >(UPDATE_USER_LANGUAGE, {
    getSuccessMessage: () => t('languageUpdated'),
  })

  const handleMethod = (variables: UpdateUserLanguageVariables) =>
    updateUserLanguage({ ...variables })

  return [mutationResult, handleMethod]
}
