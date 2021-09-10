import React, { FC } from 'react'
import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

interface PageLoadingSpinnerProps {
  load: boolean
}

export const PageLoadingSpinner: FC<PageLoadingSpinnerProps> = ({
  load = true,
}) => {
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
