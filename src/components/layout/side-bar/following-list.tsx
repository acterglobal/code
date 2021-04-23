import React, { FC } from 'react'
import { ListItem, makeStyles } from '@material-ui/core'
import { ActerAvatar } from 'src/components/acter/avatar'
import { User } from '@schema'
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
  return (
    <>
      {user.Acter.Following.map(({ Following }) => (
        <ListItem className={classes.item}>
          <ActerAvatar acter={Following} size={4} />
        </ListItem>
      ))}
    </>
  )
}

const useStyles = makeStyles(commonStyles)
