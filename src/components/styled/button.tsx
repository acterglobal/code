import React, { FC } from 'react'

import {
  Button as MuiButton,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'

export const Button = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 50,
      textTransform: 'none',
      width: 200,
    },
  })
)(MuiButton)
