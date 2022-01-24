import { Acter, ActerPrivacySettings } from '@acter/schema'

export const getPrivacySettings = (acter: Acter): boolean => {
  return acter?.acterPrivacySetting === ActerPrivacySettings.PUBLIC
    ? false
    : true
}
