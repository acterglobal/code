import React, { FC } from 'react'

import { DefaultMessage } from '@acter/components/dashboard/default-message'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, Activity } from '@acter/schema'

interface ZeroMessageProps {
  activities: Activity[]
}

export const ZeroMessage: FC<ZeroMessageProps> = ({ activities }) => {
  const { acter, loading: acterLoading } = useActer()
  const { user, loading: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  if (activities.length <= 0) {
    if (userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)) {
      return (
        <DefaultMessage
          message="You have no activities."
          redirectTo={`/activities/new?organiserActerId=${acter.id}`}
        />
      )
    }
    return (
      <DefaultMessage message="There are no activities to show at this time" />
    )
  }
  return null
}
