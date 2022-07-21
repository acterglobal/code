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
import { Acter } from '@acter/schema'

export interface ActerMenuHeaderProps {
  acter: Acter
  height?: number
}

export const ActerMenuHeader: FC<ActerMenuHeaderProps> = ({
  acter,
  height,
}) => {
  const classes = useStyles({ height })

  return (
    <ListItem divider className={classes.acterHeaderItem}>
      <ListItemAvatar>
        <ActerAvatar acter={acter} size={4} />
      </ListItemAvatar>
    </ListItem>
  )
}

type StyleParams = {
  height: number | undefined
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterHeaderItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
      minHeight: ({ height }: StyleParams) => theme.spacing(height || 6),
      marginBottom: 10,
    },
  })
)
