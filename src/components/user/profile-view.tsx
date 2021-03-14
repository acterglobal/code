import React from 'react'

import { User } from '@schema'

interface ProfileViewProps {
  user: User
}

export const ProfileView = ({ user }: ProfileViewProps) => (
  <div>{user.email}</div>
)
