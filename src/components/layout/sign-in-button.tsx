import React from 'react'
import { Button } from '@material-ui/core'

export interface SignInButtonProps {
  /**
   * Action to perform on sign-in
   */
  onClick: () => void
}

export const SignInButton = ({ onClick }: SignInButtonProps) => (
  <Button color="inherit" onClick={() => onClick()}>
    Sign in
  </Button>
)
