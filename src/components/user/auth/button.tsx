import React, { FC } from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '100%',
    color: 'white',
    borderRadius: theme.spacing(3),
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[500],
    },
  },
  socialTypeButton: {
    width: '80%',
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
      className={clsx(
        classes.button,
        socailSignupType && classes.socialTypeButton
      )}
      variant="contained"
      disabled={disabled}
      onClick={handleClick}
      disableElevation
    >
      {label}
    </MuiButton>
  )
}
