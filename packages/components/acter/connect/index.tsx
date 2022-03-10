import React, { FC, useMemo } from 'react'

import { Button, Theme, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { KeyboardArrowDown } from '@mui/icons-material'

import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { filterConnectionsByActerSetting } from '@acter/lib/acter/filter-by-acter-setting'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { Size } from '@acter/lib/constants'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

const { ACTIVITY } = ActerTypes
const { SMALL } = Size

interface ConnectProps {
  acterId?: string
  size?: Size
}
export const Connect: FC<ConnectProps> = ({ acterId, size }) => {
  const classes = useStyles({ size })
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

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const isActivity = acter?.ActerType.name === ACTIVITY ? true : false

  if (!user)
    return (
      <ConnectButton
        buttonText="Join"
        redirectUrl={loginUrl}
        isActivity={isActivity}
        size={size}
      />
    )

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
          <ConnectButton
            buttonText="Join"
            redirectUrl={loginUrl}
            isActivity={isActivity}
            size={size}
          />
        )
      }
      closeOnClick={false}
      size="large"
    >
      {selectedFollowers.map((follower) => (
        <FollowerRow
          follower={follower}
          acterId={acterId}
          key={`follower-${follower.id}`}
        />
      ))}
    </DropdownMenu>
  )
}

type StyleProps = {
  size: Size
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    button: ({ size }: StyleProps) => ({
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      height: theme.spacing(size === SMALL ? 4 : 4.5),
      color: theme.palette.secondary.main,
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: size === SMALL ? '0.8rem' : '1rem',
    }),
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
})
