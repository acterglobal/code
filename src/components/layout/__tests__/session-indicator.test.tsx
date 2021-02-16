import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SessionIndicator } from 'src/components/layout/session-indicator'
import { ExampleUser } from 'src/__fixtures__/user/example-user'
import { requirePropFactory } from '@material-ui/core'

jest.mock('next-auth/client')

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
    render(<SessionIndicator user={ExampleUser} />)
    expect(screen.findByRole('button', { name: 'profile-button' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'signin-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

  it('should show the session menu when the profile button is clicked', async () => {
    render(<SessionIndicator user={ExampleUser} />)
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

  it('should call the signout function when sign out is clicked', async () => {
    const mockSignOut = jest.fn()
    require('next-auth/client').__setMockSignOut(mockSignOut)
    render(<SessionIndicator user={ExampleUser} />)
    const profileButton = await screen.findByRole('button', {
      name: 'profile-button',
    })
    expect(profileButton).toBeTruthy()
    userEvent.click(profileButton)
    const logoutLink = await screen.findByRole('menuitem', { name: 'Sign Out' })
    expect(logoutLink).toBeTruthy()
    userEvent.click(logoutLink)
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })
})
