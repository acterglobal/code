import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { MenuItem, createStyles, makeStyles, Theme } from '@material-ui/core'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { excludeActerTypes } from 'src/lib/acter/exclude-acter-types'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User } from '@schema'
import { ACTIVITY, USER } from 'src/constants'
import { commonStyles } from 'src/components/layout/side-bar/common'

interface FollowingListProps {
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
        [ACTIVITY, USER]
      ).map((acter, i) => (
        <MenuItem
          key={i}
          className={clsx({
            [classes.item]: true,
            [classes.currentActer]: router.query.slug === acter.slug,
          })}
        >
          <Link href={acterAsUrl(acter)}>
            <a>
              <ActerAvatar acter={acter} size={4} />
            </a>
          </Link>
        </MenuItem>
      ))}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    currentActer: {
      backgroundColor: theme.palette.secondary[600],
    },
  })
)
