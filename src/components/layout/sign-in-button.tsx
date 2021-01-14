/* istanbul ignore file */
import React from 'react'
import { Button } from '@material-ui/core'

export interface SignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Action to perform on sign-in
   */
  onClick: () => void
}

export const SignInButton = ({ onClick }: SignInButtonProps) => (
  <Button color="inherit" onClick={() => onClick()} aria-label="signin-button">
    Sign in
  </Button>
)
