import React, { FC } from 'react'

import { ListItem, ListItemAvatar, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActerAvatar } from '@acter/components/acter/avatar'
import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerMenuHeader: FC = () => {
  const classes = useStyles()
  const { acter } = useActer({ fetchParent: true })
  if (!acter) return null

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
      minHeight: theme.spacing(6),
      marginBottom: 10,
    },
  })
)
