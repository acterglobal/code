import { FC } from 'react'

import { CircularProgress } from '@material-ui/core'

interface LoadingSpinnerProps {
  size?: number
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 15 }) => {
  return <CircularProgress color="inherit" size={size} thickness={2} />
}
