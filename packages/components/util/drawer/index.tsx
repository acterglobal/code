import React, { FC } from 'react'

import { Box, Drawer as MUIDrawer } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
    <MUIDrawer anchor="right" open={open} ModalProps={{ onClose: handleClose }}>
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
      'ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
        overflowY: 'hidden',
      },
    },
  })
)
