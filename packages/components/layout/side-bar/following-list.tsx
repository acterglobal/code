import React, { FC, useMemo } from 'react'

import { useRouter } from 'next/router'

import {
  Badge,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
  Box,
} from '@material-ui/core'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { useNotifications } from '@acter/lib/notification/use-notifications'
import { useUser } from '@acter/lib/user/use-user'

const { ACTIVITY, GROUP, USER } = ActerTypes

export const FollowingList: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const { user, fetching } = useUser()

  const followingActers = useMemo(
    () =>
      excludeActerTypes(
        user?.Acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [user?.Acter?.Following?.length]
  )

  const { notifications } = useNotifications()

  const getBadgeNumber = (acter) => notifications[acter.id]?.length || 0

  if (fetching) return <LoadingSpinner />
  if (!user) return null

  return (
    <Box className={classes.listContainer}>
      {followingActers?.map((acter) => (
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
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    listContainer: {
      maxHeight: '60vh',
      overflow: 'hidden',
      overflowY: 'scroll',
    },
    currentActer: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
)
