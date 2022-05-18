import React, { FC, useMemo, useState } from 'react'

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
import { Size } from '@acter/lib/constants'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

const { ACTIVITY } = ActerTypes
const { SMALL } = Size

interface ConnectProps {
  acterId?: string
  size?: Size
}
export const Connect: FC<ConnectProps> = ({ acterId, size }) => {
  const { t } = useTranslation('common')
  const classes = useStyles({ size })
  const { loginUrl } = useAuthRedirect()
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer({ acterId })
  const [selectedFilteredFollowers, setSelectedFilteredFollowers] = useState([])

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
        buttonText={capitalize(t('join'))}
        redirectUrl={loginUrl}
        isActivity={isActivity}
        size={size}
      />
    )

  if (!followers.length) return null

  // Anyone can leave but they can't join
  // Button case 1 joining follow acters can join setting

  // Case two leaving both acters & people can leave
  // if can join is set to ACTERS current user is part of selectedFollowers
  // SO filter user from followers
  // If the user is the creator then don't add to follower list

  // followers is acter followers not user

  const isMember = checkMemberAccess(user, acter)

  const selectedFollowers = filterConnectionsByActerSetting(acter, followers)

  const userFollower = acter?.Followers?.filter(
    (follower) => follower.Follower?.id === user.Acter?.id
  )

  const isUserCreator =
    userFollower[0].Follower.id === acter.createdByUserId ? true : false

  const getFilteredFollowers = (
    isMember,
    userFollower,
    isUserCreator,
    selectedFollowers
  ) => {
    if (isMember && userFollower.length > 0 && isUserCreator) {
      return [...selectedFollowers, userFollower[0].Follower]
      // setSelectedFilteredFollowers([
      //   ...selectedFilteredFollowers,
      //   userFollower[0].Follower,
      // ])
    }
    return selectedFollowers
  }

  const selectedFollowersWithUser = getFilteredFollowers(
    isMember,
    userFollower,
    isUserCreator,
    selectedFollowers
  )

  console.log('ACTER FOLLOWERS...', acter && selectedFollowers)
  console.log('USER FOLLOWERS...', acter && selectedFollowersWithUser)

  if (isMember && selectedFollowers.length === 0) {
    return <Box className={classes.memberLabel}>{capitalize(t('member'))}</Box>
  }

  return (
    <DropdownMenu
      anchorNode={
        isMember ? (
          <Button className={classes.button}>
            {capitalize(t('member'))} <KeyboardArrowDown fontSize="small" />
          </Button>
        ) : (
          <ConnectButton
            buttonText={capitalize(t('join'))}
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
