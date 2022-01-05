import React, { FC } from 'react'

import { NotAuthorizedMessage } from '@acter/components/errors/not-authorized'
import { NotLoggedInMessage } from '@acter/components/errors/not-logged'
import { User } from '@acter/schema'

interface Custom401Props {
  user?: User
  isPrivate?: boolean
}

export const Custom401: FC<Custom401Props> = ({ user, isPrivate }) => {
  if (!user) return <NotLoggedInMessage />

  if (isPrivate) return <NotAuthorizedMessage />
}
