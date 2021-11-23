import React, { FC, useState } from 'react'

import { RadioGroup } from '@material-ui/core'

import { SettingsRadio } from '@acter/components/util/forms'
import {
  Setting,
  SettingContainer,
} from '@acter/components/util/forms/setting-container'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import {
  Acter,
  ActerJoinSettings,
  ActerWhoCanJoinSettings,
} from '@acter/schema'

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

  const [
    acterWhoCanJoinSetting,
    setActerWhoCanJoinSetting,
  ] = useState<ActerWhoCanJoinSettings>(
    ActerWhoCanJoinSettings[acter.acterWhoCanJoinSetting]
  )

  const [{ fetching: updatingSetting }, updateActer] = useUpdateActer(acter, {
    onCompleted: (data) => {
      setActerJoinSetting(
        ActerJoinSettings[data.updateActerCustom.acterJoinSetting]
      )
      setActerWhoCanJoinSetting(
        ActerWhoCanJoinSettings[data.updateActerCustom.acterWhoCanJoinSetting]
      )
    },
  })

  const handleChangeJoinSetting = (event) => {
    updateActer({
      ...acter,
      acterJoinSetting: event.target.value,
    } as ActerVariables)
  }

  const handleChangeWhoCanJoin = (event) => {
    updateActer({
      ...acter,
      acterWhoCanJoinSetting: event.target.value,
    } as ActerVariables)
  }

  return (
    <SettingContainer heading="Accessability">
      <Setting title="Who can access">
        <RadioGroup
          aria-label="member-join-setting"
          name="acterJoinSetting"
          value={acterJoinSetting}
          onChange={handleChangeJoinSetting}
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
      <Setting title="Who can join">
        <RadioGroup
          aria-label="member-join-setting"
          name="acterJoinSetting"
          value={acterWhoCanJoinSetting}
          onChange={handleChangeWhoCanJoin}
        >
          <SettingsRadio
            label="Acters"
            subText="(Other groups, organisations and networks)"
            value={ActerWhoCanJoinSettings.ACTERS}
            updating={
              acterWhoCanJoinSetting === ActerWhoCanJoinSettings.USERS &&
              updatingSetting
            }
          />
          <SettingsRadio
            label="People"
            subText="(Individual users)"
            value={ActerWhoCanJoinSettings.USERS}
            updating={
              acterWhoCanJoinSetting === ActerWhoCanJoinSettings.ACTERS &&
              updatingSetting
            }
          />
        </RadioGroup>
      </Setting>
    </SettingContainer>
  )
}
