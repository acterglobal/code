import React, { FC, useState } from 'react'

import { RadioGroup } from '@material-ui/core'

import { SettingsRadio } from '@acter/components/util/forms'
import {
  Setting,
  SettingContainer,
} from '@acter/components/util/forms/setting-container'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter, ActerPrivacySettings } from '@acter/schema'

interface VisibilitySettingsProps {
  acter: Acter
}

export const VisibilitySettings: FC<VisibilitySettingsProps> = ({ acter }) => {
  const { t } = useTranslation('settings')
  const [acterPrivacySetting, setActerPrivacySetting] =
    useState<ActerPrivacySettings>(
      ActerPrivacySettings[acter.acterPrivacySetting]
    )

  const [{ fetching: updatingSetting }, updateActer] = useUpdateActer(acter, {
    onCompleted: (data) =>
      setActerPrivacySetting(
        ActerPrivacySettings[data.updateActerCustom.acterPrivacySetting]
      ),
  })

  const handleChange = (event) => {
    updateActer({
      ...acter,
      acterPrivacySetting: event.target.value,
    } as ActerVariables)
  }

  return (
    <SettingContainer heading={capitalize(t('visibility'))}>
      <Setting title={t('whoCanSee')}>
        <RadioGroup
          aria-label="acter-privacy-setting"
          name="acterPrivacySetting"
          value={acterPrivacySetting}
          onChange={handleChange}
        >
          <SettingsRadio
            label={capitalize(t('public'))}
            subText={t('anyOneCanSee')}
            value={ActerPrivacySettings.PUBLIC}
            updating={
              acterPrivacySetting === ActerPrivacySettings.PRIVATE &&
              updatingSetting
            }
          />
          <SettingsRadio
            label={capitalize(t('private'))}
            subText={t('onlyMembersCanSee')}
            value={ActerPrivacySettings.PRIVATE}
            updating={
              acterPrivacySetting === ActerPrivacySettings.PUBLIC &&
              updatingSetting
            }
          />
        </RadioGroup>
      </Setting>
    </SettingContainer>
  )
}
