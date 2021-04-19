/* istanbul ignore file */
import React, { FC } from 'react'
import { Button } from '@material-ui/core'

export interface SignInButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Action to perform on sign-in
   */
  onClick: () => void
}

export const SignInButton: FC<SignInButtonProps> = ({ onClick }) => (
  <Button color="inherit" onClick={() => onClick()} aria-label="signin-button">
    Sign in
  </Button>
)
