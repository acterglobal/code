import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SessionIndicator } from '@acter/components/layout/session-indicator'
import { ExampleUser, ExampleActer } from '@acter/schema/fixtures'

const user = {
  ...ExampleUser,
  Acter: ExampleActer,
}

describe('SessionIndicator', () => {
  it('should show a sign in button when the user is not logged in', () => {
    render(<SessionIndicator />)
    expect(screen.findByRole('button', { name: 'signin-button' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'profile-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

  it('should show the profile button and menu when user is logged in', () => {
    render(<SessionIndicator user={user} />)
    expect(screen.findByRole('button', { name: 'profile-button' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'signin-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

  it('should show the session menu when the profile button is clicked', async () => {
    render(<SessionIndicator user={user} />)
    const profileButton = await screen.findByRole('button', {
      name: 'profile-button',
    })
    expect(profileButton).toBeTruthy()
    userEvent.click(profileButton)
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'signin-button' })).toBeFalsy()
  })
})
