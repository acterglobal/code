import React, { FC } from 'react'

import { Theme, Box } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { grey } from '@acter/components/themes/colors'

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
        backgroundColor: grey.A100,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.4),
      },
    },
  })
)
