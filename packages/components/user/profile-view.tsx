import React, { FC } from 'react'

import { User } from '@acter/schema/types'

interface ProfileViewProps {
  user: User
}

export const ProfileView: FC<ProfileViewProps> = ({ user }) => (
  <div>{user.email}</div>
)
