import React, { FC } from 'react'
import { Button } from '@material-ui/core'
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

export interface SignupButtonProps {
  label: string
  socailSignupType?: boolean
  hadleClick: () => void
}

export const SignupButton: FC<SignupButtonProps> = (props) => {
  const classes = useStyles()
  const { label, hadleClick, socailSignupType } = props

  return (
    <Button
      className={socailSignupType ? classes.socialTypeButton : classes.button}
      variant="contained"
      onClick={hadleClick}
    >
      {label}
    </Button>
  )
}
