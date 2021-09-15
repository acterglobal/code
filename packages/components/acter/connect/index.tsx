import React, { FC, useMemo } from 'react'

import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export const Connect: FC = () => {
  const { loginUrl } = useAuthRedirect()
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  const followers = useMemo(
    () =>
      getFollowers(user, acter).filter(
        (follower) => follower.id !== acter.Activity?.Organiser?.id
      ),
    [acter?.Followers]
  )
  const joinedFollowers = useMemo(
    () => followers.filter((follower) => getActerConnection(acter, follower)),
    [followers]
  )

  if (!user) {
    return <ConnectButton href={loginUrl}>Join</ConnectButton>
  }
  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null
  if (!followers.length) {
    return null
  }

  return (
    <DropdownMenu
      anchorNode={
        <ConnectButton>
          {joinedFollowers.length > 0 ? 'Joined' : 'Join'}
        </ConnectButton>
      }
      closeOnClick={false}
    >
      {followers.map((follower) => (
        <FollowerRow follower={follower} />
      ))}
    </DropdownMenu>
  )
}
