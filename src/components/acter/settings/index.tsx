import React, { FC } from 'react'

import { MenuItem } from '@material-ui/core'
import {
  ActerUsersSettings,
  ActerUsersSettingsProps,
} from 'src/components/acter/settings/acter-users-settings'
import {
  SettingsContainer,
  SettingsContent,
  SettingsMenu,
  SettingsSectionHeading,
} from 'src/components/util/settings-layout'
import { Acter } from '@schema'

export interface ActerSettingsProps extends ActerUsersSettingsProps {
  acter: Acter
}

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  return (
    <SettingsContainer>
      <SettingsMenu>
        <MenuItem>Members</MenuItem>
      </SettingsMenu>
      <SettingsContent>
        <SettingsSectionHeading>Join</SettingsSectionHeading>
        <ActerUsersSettings
          acter={acter}
          onSettingsChange={onSettingsChange}
          loading={loading}
        />
      </SettingsContent>
    </SettingsContainer>
  )
}
