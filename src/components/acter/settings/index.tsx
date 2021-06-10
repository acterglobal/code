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
import { ActerSettingsMenu } from 'src/constants/acter-settings-menu'
import { Links as LinkSection } from 'src/components/links'
import { Acter, Link as LinkType } from '@schema'

export interface ActerSettingsProps extends ActerUsersSettingsProps {
  acter: Acter
  links: LinkType[]
}

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  links,
  onSettingsChange,
  loading,
}) => {
  const [showContent, setShowContent] = useState(ActerSettingsMenu.MEMBERS)
  const handleClick = (content) => {
    setShowContent(content)
  }

  console.log(links)
  return (
    <SettingsContainer>
      <SettingsMenu>
        <MenuItem onClick={() => handleClick(ActerSettingsMenu.MEMBERS)}>
          Members
        </MenuItem>
        <MenuItem onClick={() => handleClick(ActerSettingsMenu.LINKS)}>
          Links
        </MenuItem>
      </SettingsMenu>

      <SettingsContent>
        {showContent === ActerSettingsMenu.MEMBERS && (
          <>
            <SettingsSectionHeading>Join</SettingsSectionHeading>
            <ActerUsersSettings
              acter={acter}
              onSettingsChange={onSettingsChange}
              loading={loading}
            />
          </>
        )}
        {showContent === ActerSettingsMenu.LINKS && (
          <LinkSection links={links} />
        )}
      </SettingsContent>
    </SettingsContainer>
  )
}
