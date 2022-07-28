import React, { FC } from 'react'

import { SectionContainer } from '@acter/components/group/sections/container'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole } from '@acter/schema'

interface SettingsSectionProps {
  acter: Acter
}

export const SettingsSection: FC<SettingsSectionProps> = ({ acter }) => {
  const { user } = useUser()

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <SectionContainer
      title={capitalize(GroupSectionTabs.SETTINGS)}
      buttonText="Manage Settings"
      sectionContent={GroupSectionTabs.SETTINGS}
      hideAddIcon
    ></SectionContainer>
  )
}
