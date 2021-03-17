import React, { FC } from 'react'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

export const ButtonsContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(1),
      backgroundColor: 'white',
      zIndex: 10,
    },
  })
)(Box)
