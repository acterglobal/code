import React, { FC } from 'react'

import { Drawer, makeStyles, Theme, createStyles } from '@material-ui/core'

import { PRIMARY_WIDTH } from '@acter/components/layout/side-bar'
import { commonStyles } from '@acter/components/layout/side-bar/common'

const SECONDARY_WIDTH = 22

export const SecondaryMenu: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{ root: classes.root, paper: classes.paper }}
    >
      {children}
    </Drawer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    root: {
      width: theme.spacing(SECONDARY_WIDTH),
    },
    paper: {
      width: theme.spacing(SECONDARY_WIDTH),
      left: theme.spacing(PRIMARY_WIDTH),
      backgroundColor: theme.palette.secondary.main,
      border: 'none',
      height: '100%',
      color: theme.palette.secondary.contrastText,
      '& .MuiListItem-root': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& .MuiDivider-root': {
        backgroundColor: theme.palette.secondary.light,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.4),
      },
    },
  })
)
