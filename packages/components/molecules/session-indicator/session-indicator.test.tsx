import React from 'react'

import userEvent from '@testing-library/user-event'

import { SessionIndicator } from '@acter/components/molecules/session-indicator'
import { render, screen } from '@acter/lib/test-utils'
import { useUser } from '@acter/lib/user/use-user'
import { ExampleUser, ExampleActer } from '@acter/schema/fixtures'

jest.mock('@acter/lib/user/use-user')

const user = {
  ...ExampleUser,
  Acter: ExampleActer,
}

describe('SessionIndicator', () => {
  const mockUseUser = useUser as jest.Mock
  beforeEach(() => {
    mockUseUser.mockReset()
  })

  it('when the user is not logged in should show a sign in button', () => {
    mockUseUser.mockReturnValue({
      fetching: false,
    })
    render(<SessionIndicator />)
    expect(screen.findByRole('button', { name: 'signin-button' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-fetching-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'profile-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

  describe('when user logged in', () => {
    beforeEach(() => {
      mockUseUser.mockReturnValue({
        user,
        fetching: false,
      })
    })
    it('should show the profile button and menu', () => {
      render(<SessionIndicator />)
      expect(
        screen.findByRole('button', { name: 'profile-button' })
      ).toBeTruthy()

      expect(
        screen.queryByRole('progressbar', {
          name: 'session-fetching-indicator',
        })
      ).toBeFalsy()
      expect(
        screen.queryByRole('button', { name: 'signin-button' })
      ).toBeFalsy()
      expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
    })

    it('should show the session menu when the profile button is clicked', async () => {
      render(<SessionIndicator />)
      const profileButton = await screen.findByRole('button', {
        name: 'profile-button',
      })
      expect(profileButton).toBeTruthy()
      userEvent.click(profileButton)
      expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()

      expect(
        screen.queryByRole('progressbar', {
          name: 'session-fetching-indicator',
        })
      ).toBeFalsy()
      expect(
        screen.queryByRole('button', { name: 'signin-button' })
      ).toBeFalsy()
    })
  })
})
