import React, { FC } from 'react'

import { ActerMenuHeader } from '@acter/components/acter/layout/menu/header'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SecondaryMenu } from '@acter/components/molecules/secondary-menu'
import { useUser } from '@acter/lib/user/use-user'

import { ProfileMenuItems } from './items'
import { Logout } from './logout'

export const ProfileMenu: FC = () => {
  const { user, fetching: userLoading } = useUser()

  if (userLoading) return <LoadingSpinner />
  if (!user) return null

  return (
    <SecondaryMenu>
      <ActerMenuHeader acter={user.Acter} />

      <ProfileMenuItems />

      <Logout />
    </SecondaryMenu>
  )
}
