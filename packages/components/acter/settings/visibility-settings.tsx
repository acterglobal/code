import React, { FC, useState } from 'react'

import { RadioGroup } from '@mui/material'

import { SettingsRadio } from '@acter/components/util/forms'
import {
  Setting,
  SettingContainer,
} from '@acter/components/util/forms/setting-container'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Acter, ActerPrivacySettings } from '@acter/schema'

interface VisibilitySettingsProps {
  acter: Acter
}

export const VisibilitySettings: FC<VisibilitySettingsProps> = ({ acter }) => {
  const [
    acterPrivacySetting,
    setActerPrivacySetting,
  ] = useState<ActerPrivacySettings>(
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
    <SettingContainer heading="Visibility">
      <Setting title="Who can see">
        <RadioGroup
          aria-label="acter-privacy-setting"
          name="acterPrivacySetting"
          value={acterPrivacySetting}
          onChange={handleChange}
        >
          <SettingsRadio
            label="Public"
            subText="(Anyone can find and see)"
            value={ActerPrivacySettings.PUBLIC}
            updating={
              acterPrivacySetting === ActerPrivacySettings.PRIVATE &&
              updatingSetting
            }
          />
          <SettingsRadio
            label="Private"
            subText="(Only members can see)"
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
