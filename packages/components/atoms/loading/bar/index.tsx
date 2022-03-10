import React, { FC } from 'react'

import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'

export const LoadingBar: FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.loadingBar}>
      <LoadingSpinner />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadingBar: {
      width: '100%',
      margin: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  })
)
