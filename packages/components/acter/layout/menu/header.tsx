import React, { FC } from 'react'

import {
  createStyles,
  ListItem,
  ListItemAvatar,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerMenuHeader: FC = () => {
  const classes = useStyles()
  const { acter: fetchedParent } = useActer({ fetchParent: true })

  if (!fetchedParent) return null

  const acter = fetchedParent?.Parent ? fetchedParent.Parent : fetchedParent

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
