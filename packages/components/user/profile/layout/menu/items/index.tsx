import React, { FC } from 'react'

import { ProfileIcon, EditIcon, SettingsIcon } from '@acter/components/icons'
import { ProfileMenuItem } from '@acter/components/user/profile/layout/menu/items/item'
import { ProfileSettingsPages } from '@acter/lib/constants'

export const ProfileMenuItems: FC = () => {
  return (
    <>
      <ProfileMenuItem
        path={ProfileSettingsPages.INFO}
        label="Profile View"
        Icon={ProfileIcon}
      />
      <ProfileMenuItem
        path={ProfileSettingsPages.INTERESTS}
        label="Edit Profile"
        Icon={EditIcon}
      />
      <ProfileMenuItem
        path={ProfileSettingsPages.NOTIFICATIONS}
        label="Profile settings"
        Icon={SettingsIcon}
      />
    </>
  )
}
