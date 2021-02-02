import React, { FC } from 'react'
import {
  Drawer,
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(2),
    width: (props: { width: number }) => `${props.width}px`,
  },
}))

interface SideBarProps {
  /**
   * Width of the sidebar
   */
  width: number
}

export const SideBar: FC<SideBarProps> = ({ width }) => {
  const classes = useStyles({ width })
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.paper }}
    >
      <Toolbar />
      <Typography variant="h6">My Engagement</Typography>
    </Drawer>
  )
}
