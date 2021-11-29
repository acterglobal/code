import React, { FC, useState } from 'react'

import { RadioGroup } from '@material-ui/core'

import { SettingsRadio } from '@acter/components/util/forms'
import {
  Setting,
  SettingContainer,
} from '@acter/components/util/forms/setting-container'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Acter, ActerJoinSettings } from '@acter/schema'

export interface AccessabilitySettingsProps {
  /**
   * Acter for settings
   */
  acter: Acter
}

export const AccessabilitySettings: FC<AccessabilitySettingsProps> = ({
  acter,
}) => {
  const [acterJoinSetting, setActerJoinSetting] = useState<ActerJoinSettings>(
    ActerJoinSettings[acter.acterJoinSetting]
  )

  const [{ fetching: updatingSetting }, updateActer] = useUpdateActer(acter, {
    onCompleted: (data) =>
      setActerJoinSetting(
        ActerJoinSettings[data.updateActerCustom.acterJoinSetting]
      ),
  })

  const handleChange = (event) => {
    updateActer({
      ...acter,
      acterJoinSetting: event.target.value,
    } as ActerVariables)
  }

  return (
    <SettingContainer heading="Accessability">
      <Setting title="Who can access ">
        <RadioGroup
          aria-label="member-join-setting"
          name="acterJoinSetting"
          value={acterJoinSetting}
          onChange={handleChange}
        >
          <SettingsRadio
            label="Everyone"
            value={ActerJoinSettings.EVERYONE}
            updating={
              acterJoinSetting === ActerJoinSettings.RESTRICTED &&
              updatingSetting
            }
          />
          <SettingsRadio
            label="Restricted"
            subText="(Needs approval)"
            value={ActerJoinSettings.RESTRICTED}
            updating={
              acterJoinSetting === ActerJoinSettings.EVERYONE && updatingSetting
            }
          />
        </RadioGroup>
      </Setting>
    </SettingContainer>
  )
}
