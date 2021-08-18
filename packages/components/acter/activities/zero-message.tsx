import { FC } from 'react'
import { Acter, ActerConnectionRole, Activity, User } from '@acter/schema'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { DefaultMessage } from '@acter/components/dashboard/default-message'

interface ZeroMessageProps {
  acter: Acter
  activities: Activity[]
  user: User
}

export const ZeroMessage: FC<ZeroMessageProps> = ({
  acter,
  activities,
  user,
}) => {
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
