import React, { FC } from 'react'
import { Link } from '@acter/components/util/anchor-link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ListItem, createStyles, makeStyles, Theme } from '@material-ui/core'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { User } from '@schema'
import { ActerTypes } from '@acter/lib/constants'
import { commonStyles } from '@acter/components/layout/side-bar/common'

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
  return (
    <>
      {excludeActerTypes(
        user.Acter.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ).map((acter) => (
        <ListItem
          key={`following-${acter.id}`}
          className={clsx({
            [classes.item]: true,
            [classes.currentActer]: router.query.slug === acter.slug,
          })}
        >
          <Link href={acterAsUrl(acter)}>
            <ActerAvatar acter={acter} size={4} />
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
