import React, { FC } from 'react'

import {
  createStyles,
  ListItem,
  ListItemAvatar,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { Acter } from '@acter/schema'

interface ActerMenuHeaderProps {
  acter: Acter
}
export const ActerMenuHeader: FC<ActerMenuHeaderProps> = ({ acter }) => {
  const classes = useStyles()
  return (
    <ListItem divider className={classes.acterHeaderItem}>
      <ListItemAvatar>
        <ActerAvatar acter={acter} size={4} />
      </ListItemAvatar>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterHeaderItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
      height: 50,
      marginBottom: 10,
    },
  })
)
