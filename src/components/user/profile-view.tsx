import React from 'react'

import { User } from '@generated/type-graphql'

interface ProfileViewProps {
  user: User
}

export const ProfileView = ({ user }: ProfileViewProps) => (
  <div>{user.email}</div>
)
