import { CircularProgress } from '@material-ui/core'
import { FC } from 'react'

interface LoadingSpinnerProps {
  size?: number
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 15 }) => {
  return <CircularProgress color="inherit" size={size} thickness={2} />
}
