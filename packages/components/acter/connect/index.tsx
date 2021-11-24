import React, { FC, useMemo } from 'react'

import { Button, makeStyles, createStyles, Theme } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getIsOrganisationsCanJoin } from '@acter/lib/acter/get-can-organisations-join'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const { USER } = ActerTypes
interface ConnectProps {
  acterId?: string
}
export const Connect: FC<ConnectProps> = ({ acterId }) => {
  const classes = useStyles()
  const { loginUrl } = useAuthRedirect()
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer({ acterId })

  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  const followers = useMemo(
    () =>
      getFollowers(user, acter).filter(
        (follower) => follower.id !== acter.Activity?.Organiser?.id
      ),
    [acter?.Followers]
  )

  if (!user) return <ConnectButton href={loginUrl}>Join</ConnectButton>

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null
  if (!followers.length) return null

  const isOrganisationsCanJoin = getIsOrganisationsCanJoin(acter)

  const selectedFollowers = isOrganisationsCanJoin
    ? followers
    : followers.filter((follower) => follower.ActerType.name === USER)

  return (
    <DropdownMenu
      anchorNode={
        isMember ? (
          <Button className={classes.button}>
            Member <KeyboardArrowDown fontSize="small" />
          </Button>
        ) : (
          <ConnectButton>Join</ConnectButton>
        )
      }
      closeOnClick={false}
      size="large"
    >
      {selectedFollowers.map((follower) => (
        <FollowerRow follower={follower} acterId={acterId} />
      ))}
    </DropdownMenu>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      height: theme.spacing(3.5),
      color: theme.palette.secondary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
)
