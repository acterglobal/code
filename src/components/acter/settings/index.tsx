import React, { FC, useState } from 'react'

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
import { Links as LinkSection } from 'src/components/links'
import { Acter } from '@schema'

export interface ActerSettingsProps extends ActerUsersSettingsProps {
  acter: Acter
}

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  const [showContent, setShowContent] = useState('members')
  const handleClick = (content) => {
    setShowContent(content)
  }
  return (
    <SettingsContainer>
      <SettingsMenu>
        <MenuItem onClick={() => handleClick('members')}>Members</MenuItem>
        <MenuItem onClick={() => handleClick('links')}>Links</MenuItem>
      </SettingsMenu>

      <SettingsContent>
        {showContent === 'members' && (
          <>
            <SettingsSectionHeading>Join</SettingsSectionHeading>
            <ActerUsersSettings
              acter={acter}
              onSettingsChange={onSettingsChange}
              loading={loading}
            />
          </>
        )}
        {showContent === 'links' && <LinkSection />}
      </SettingsContent>
    </SettingsContainer>
  )
}
