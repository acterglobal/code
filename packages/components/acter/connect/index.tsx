import React, { FC, useMemo } from 'react'

import { Button, makeStyles, createStyles, Theme, Box } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { filterConnectionsByActerSetting } from '@acter/lib/acter/filter-by-acter-setting'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

interface ConnectProps {
  acterId?: string
}
export const Connect: FC<ConnectProps> = ({ acterId }) => {
  const classes = useStyles()
  const { loginUrl } = useAuthRedirect()
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer({ acterId })

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

  const selectedFollowers = filterConnectionsByActerSetting(acter, followers)

  const isMember = checkMemberAccess(user, acter)

  if (isMember && selectedFollowers.length === 0) {
    return <Box className={classes.memberLabel}>Member</Box>
  }

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
      height: theme.spacing(4.5),
      color: theme.palette.secondary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
    },
    memberLabel: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      minWidth: theme.spacing(14),
      height: theme.spacing(4.5),
      borderRadius: theme.spacing(3),
      color: theme.palette.secondary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
    },
  })
)
