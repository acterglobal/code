import React, { FC, useState } from 'react'

import { MenuItem } from '@material-ui/core'

import {
  ActerUsersSettings,
  ActerUsersSettingsProps,
} from '@acter/components/acter/settings/acter-users-settings'
import { Links as LinkSection, LinkProps } from '@acter/components/links'
import {
  SettingsContainer,
  SettingsContent,
  SettingsMenu,
  SettingsSectionHeading,
} from '@acter/components/util/settings-layout'
import { ActerSettingsMenu } from '@acter/lib/constants/acter-settings-menu'

export type ActerSettingsProps = ActerUsersSettingsProps & LinkProps

export const ActerSettings: FC<ActerSettingsProps> = ({
  links,
  onSettingsChange,
  fetching,
}) => {
  const [showContent, setShowContent] = useState(ActerSettingsMenu.MEMBERS)
  const handleClick = (content) => {
    setShowContent(content)
  }

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
              onSettingsChange={onSettingsChange}
              fetching={fetching}
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
