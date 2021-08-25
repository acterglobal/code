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
import { User } from '@acter/schema'
import { ActerTypes } from '@acter/lib/constants'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { useFetchNotifications } from '@acter/lib/notification/use-fetch-notifications'

const { ACTIVITY, GROUP, USER } = ActerTypes
export interface FollowingListProps {
  /**
   * Logged in User
   */
  user?: User
}

export const FollowingList: FC<FollowingListProps> = ({ user }) => {
  if (!user) return null
  const classes = useStyles()
  const router = useRouter()

  const followingActers = excludeActerTypes(
    user.Acter.Following.map(({ Following }) => Following),
    [ACTIVITY, USER, GROUP]
  )

  const [notifications] = useFetchNotifications(user)

  const getBadgeNumber = (acter) => notifications[acter.id]?.length || 0

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
