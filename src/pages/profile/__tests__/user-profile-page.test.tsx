import React from 'react'
import { render, screen } from '@testing-library/react'

import { ExampleUser } from 'src/__fixtures__'
import { UserProfilePage, getServerSideProps } from 'src/pages/profile'

jest.mock('next-auth/client')

describe('UserProfilePage', () => {
  it('should show a loading spinner something is loading', () => {
    render(<UserProfilePage loading={true} />)
    expect(
      screen.findByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeTruthy()
    expect(screen.queryByRole('alert')).toBeFalsy()
    expect(screen.queryByRole('main')).toBeFalsy()
  })

  it('should show an error message when there is an error', async () => {
    const errorString = 'there was an error'
    render(<UserProfilePage error={errorString} />)
    const errorAlert = await screen.findByRole('alert', { name: 'error' })
    expect(errorAlert).toBeTruthy()
    expect(errorAlert).toHaveTextContent(errorString)

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('main')).toBeFalsy()
  })

  it('should show a warning when no user is found', async () => {
    render(<UserProfilePage />)
    expect(screen.findByRole('alert', { name: 'nothing found' })).toBeTruthy()

    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
    expect(screen.queryByRole('main')).toBeFalsy()
  })

  it('should show a user profile', async () => {
    render(<UserProfilePage user={ExampleUser} />)
    const userProfile = await screen.findByRole('main')
    expect(userProfile).toBeTruthy()
    expect(userProfile).toHaveTextContent(ExampleUser.email)

    expect(screen.queryByRole('alert')).toBeFalsy()
    expect(
      screen.queryByRole('progressbar', { name: 'session-loading-indicator' })
    ).toBeFalsy()
  })
})
