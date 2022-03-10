import React, { FC } from 'react'

import { Theme, Box } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { commonStyles } from '@acter/components/organisms/side-bar/common'

export const SecondaryMenu: FC = ({ children }) => {
  const classes = useStyles()
  return <Box className={classes.root}>{children}</Box>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    root: {
      height: '100%',
      width: theme.spacing(theme.mixins.sidebar.secondaryWidth),
      backgroundColor: theme.palette.secondary.main,
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
