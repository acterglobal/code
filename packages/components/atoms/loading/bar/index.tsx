import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

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
      margin: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  })
)
