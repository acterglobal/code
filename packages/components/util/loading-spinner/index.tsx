import { FC } from 'react'

import { CircularProgress } from '@material-ui/core'

interface LoadingSpinnerProps {
  size?: number
  thickness?: number
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 15,
  thickness = 2,
}) => {
  return <CircularProgress color="inherit" size={size} thickness={thickness} />
}
