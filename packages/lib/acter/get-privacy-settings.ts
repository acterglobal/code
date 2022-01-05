import { Acter, ActerPrivacySettings } from '@acter/schema'

export const getPrivacySettings = (acter: Acter): boolean => {
  const isPrivate =
    acter?.acterPrivacySetting === ActerPrivacySettings.PUBLIC ? false : true
  return isPrivate
}
