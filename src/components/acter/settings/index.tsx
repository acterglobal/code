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
import { Links as LinkSection, LinkProps } from 'src/components/links'

export type ActerSettingsProps = ActerUsersSettingsProps & LinkProps

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  links,
  onSettingsChange,
  loading,
  onLinkSubmit,
  onLinkDelete,
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
              acter={acter}
              onSettingsChange={onSettingsChange}
              loading={loading}
            />
          </>
        )}
        {showContent === ActerSettingsMenu.LINKS && (
          <LinkSection
            links={links}
            onLinkSubmit={onLinkSubmit}
            onLinkDelete={onLinkDelete}
          />
        )}
      </SettingsContent>
    </SettingsContainer>
  )
}
