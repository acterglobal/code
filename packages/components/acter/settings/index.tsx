import React, { FC, useState } from 'react'

import { MenuItem } from '@material-ui/core'
import {
  ActerUsersSettings,
  ActerUsersSettingsProps,
} from '@acter/components/acter/settings/acter-users-settings'
import {
  SettingsContainer,
  SettingsContent,
  SettingsMenu,
  SettingsSectionHeading,
} from '@acter/components/util/settings-layout'
import { Links as LinkSection, LinkProps } from '@acter/components/links'
import { ActerSettingsMenu } from '@acter/lib/constants/acter-settings-menu'

export type ActerSettingsProps = ActerUsersSettingsProps & LinkProps

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  links,
  onSettingsChange,
  loading,
  onLinkSubmit,
  onLinkUpdate,
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
            onLinkUpdate={onLinkUpdate}
            onLinkDelete={onLinkDelete}
          />
        )}
      </SettingsContent>
    </SettingsContainer>
  )
}