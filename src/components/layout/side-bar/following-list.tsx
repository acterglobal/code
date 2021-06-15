import React, { FC } from 'react'
import { Link } from 'src/components/util/anchor-link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ListItem, createStyles, makeStyles, Theme } from '@material-ui/core'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { excludeActerTypes } from 'src/lib/acter/exclude-acter-types'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User } from '@schema'
import { ACTIVITY, GROUP, USER } from 'src/constants'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { subMenuBackgroundColor } from 'src/themes/colors'

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
      backgroundColor: subMenuBackgroundColor,
    },
  })
)
