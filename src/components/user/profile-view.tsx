import React, { FC } from 'react'

import { User } from '@schema'

interface ProfileViewProps {
  user: User
}

export const ProfileView: FC<ProfileViewProps> = ({ user }) => (
  <div>{user.email}</div>
)
