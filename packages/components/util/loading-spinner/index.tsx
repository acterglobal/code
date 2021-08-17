import React, { FC } from 'react'
import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

interface LoadingSpinnerProps {
  load: boolean
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ load = false }) => {
  const classes = useStyle()

  return (
    <Backdrop className={classes.backdrop} open={load}>
      <CircularProgress color="inherit" size={90} thickness={2} />
    </Backdrop>
  )
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: theme.colors.white,
    },
  })
)
