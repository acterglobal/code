import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { User } from '@generated/type-graphql'
import { SessionIndicator } from 'src/components/layout/session-indicator'
import { ExampleUser } from 'src/__fixtures__/user/example-user'

let mockSessionLoading: boolean
let mockSessionUser: User

// Unfortunately because how Jest hoists this mock we cannot import this functionality but must copy-and-past until a better solution is found
jest.mock('next-auth/client', () => ({
  useSession: () => [
    { expires: '', user: mockSessionUser },
    mockSessionLoading,
  ],
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
}))

describe('SessionIndicator', () => {
  beforeEach(() => {
    mockSessionLoading = false
    mockSessionUser = null
  })

  it('should show a loading spinner when the session is being fetched', () => {
    mockSessionLoading = true
    render(<SessionIndicator />)
    expect(
      screen.findByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeTruthy()

    expect(screen.queryByRole('button', { name: 'signin-button' })).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'profile-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

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
    mockSessionUser = ExampleUser
    render(<SessionIndicator />)
    expect(screen.findByRole('button', { name: 'profile-button' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('button', { name: 'signin-button' })).toBeFalsy()
    expect(screen.queryByRole('menu', { name: 'session-menu' })).toBeFalsy()
  })

  it('should show the session menu when the profile button is clicked', async () => {
    mockSessionUser = ExampleUser
    render(<SessionIndicator />)
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
