import React, { FC } from 'react'
import { Link } from '@acter/components/util/anchor-link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import {
  Badge,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { ActerTypes } from '@acter/lib/constants'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { useFetchNotifications } from '@acter/lib/notification/use-fetch-notifications'
import { useUser } from '@acter/lib/user/use-user'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'

const { ACTIVITY, GROUP, USER } = ActerTypes

export const FollowingList: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const { user, loading } = useUser()

  const followingActers = excludeActerTypes(
    user?.Acter.Following.map(({ Following }) => Following),
    [ACTIVITY, USER, GROUP]
  )

  const { notifications } = useFetchNotifications()

  const getBadgeNumber = (acter) => notifications[acter.id]?.length || 0

  if (loading) return <LoadingSpinner />
  if (!user) return null

  return (
    <>
      {followingActers.map((acter) => (
        <ListItem
          key={`following-${acter.id}`}
          className={clsx({
            [classes.item]: true,
            [classes.currentActer]: router.query.slug === acter.slug,
          })}
        >
          <Link href={acterAsUrl({ acter })}>
            <Badge
              color="error"
              invisible={getBadgeNumber(acter) <= 0}
              badgeContent={getBadgeNumber(acter)}
              overlap="circular"
            >
              <ActerAvatar acter={acter} size={4} />
            </Badge>
          </Link>
        </ListItem>
      ))}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    currentActer: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
)
