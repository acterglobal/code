import React, { FC } from 'react'

import {
  createStyles,
  makeStyles,
  Theme,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

type MemberDetailsProps = {
  follower: Acter
  handleOpenSidePanel?: (data: string) => void
}
export const MemberDetails: FC<MemberDetailsProps> = ({
  follower,
  handleOpenSidePanel,
}) => {
  const classes = useStyles()

  return (
    <>
      <ListItemAvatar>
        <ActerAvatar
          acter={follower}
          handleOpenSidePanel={handleOpenSidePanel}
        />
      </ListItemAvatar>
      <ListItemText
        classes={{ primary: classes.name, secondary: classes.location }}
        className={classes.memberInfo}
        primary={follower.name}
        secondary={
          follower.ActerType.name !== ActerTypes.USER ? follower.location : null
        }
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    memberInfo: {
      marginLeft: theme.spacing(3),
    },
    name: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 12.5,
      color: theme.palette.secondary.main,
    },
    location: {
      fontSize: 12.5,
    },
  })
)
