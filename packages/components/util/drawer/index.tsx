import React, { FC } from 'react'

import {
  Box,
  createStyles,
  Drawer as MUIDrawer,
  makeStyles,
} from '@material-ui/core'

import { TopBar, TopBarProps } from '@acter/components/util/drawer/top-bar'

interface DrawerProps extends TopBarProps {
  open: boolean
}
export const Drawer: FC<DrawerProps> = ({
  open,
  handleClose,
  heading,
  actionButtons,
  setAction,
  acter,
  children,
}) => {
  const classes = useStyles()

  return (
    <MUIDrawer anchor="right" open={open}>
      <TopBar
        handleClose={handleClose}
        actionButtons={actionButtons}
        setAction={setAction}
        acter={acter}
        heading={heading}
      />
      <Box className={classes.content}>{children}</Box>
    </MUIDrawer>
  )
}

const useStyles = makeStyles(
  createStyles({
    content: {
      height: '100%',
      overflow: 'scroll',
      paddingBottom: 30,
    },
  })
)
