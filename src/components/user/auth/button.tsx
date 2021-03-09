import React, { FC } from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '100%',
    color: 'white',
    borderRadius: theme.spacing(3),
    backgroundColor: green[600],
  },
  socialTypeButton: {
    width: '80%',
    color: 'white',
    borderRadius: theme.spacing(3),
    backgroundColor: grey[600],
    textTransform: 'none',
  },
}))

export interface ButtonProps {
  label: string
  disabled?: boolean
  socailSignupType?: boolean
  handleClick: (values: any) => Promise<void>
}

export const Button: FC<ButtonProps> = ({
  label,
  disabled = false,
  handleClick,
  socailSignupType,
}) => {
  const classes = useStyles()

  return (
    <MuiButton
      className={socailSignupType ? classes.socialTypeButton : classes.button}
      variant="contained"
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </MuiButton>
  )
}
