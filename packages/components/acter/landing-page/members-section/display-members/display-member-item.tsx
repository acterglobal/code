import React, { FC } from 'react'

import { ListItem, ListItemSecondaryAction } from '@material-ui/core'

import { ConnectionUpdateOptions } from '@acter/components/acter/landing-page/members-section/display-members/connection-update-options'
import { MemberDetails } from '@acter/components/acter/landing-page/members-section/display-members/member-details'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnection, ActerConnectionRole } from '@acter/schema'

export interface DisplayMemberItemProps {
  /**
   * The acter member we are displaying
   */
  Follower: Acter
  /**
   * The connection type of the member to the acter
   */
  connection: ActerConnection
}

export const DisplayMemberItem: FC<DisplayMemberItemProps> = ({
  Follower,
  connection,
}) => {
  const { acter, fetching: acterLoading } = useActer()
  const { user, fetching: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const canEdit = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  return (
    <ListItem>
      <MemberDetails follower={Follower} />
      <ListItemSecondaryAction>
        <ConnectionUpdateOptions
          connection={connection}
          canEdit={canEdit && Follower.id !== user?.Acter.id}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
