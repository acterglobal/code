import React from 'react'
import { render, screen } from '@testing-library/react'

import { ExampleUser } from 'src/__fixtures__/user/example-user'
import { UserProfilePage, getServerSideProps } from 'src/pages/profile'

jest.mock('next-auth/client')

let mockQueryResponse = {
  loading: false,
  error: null,
  data: {},
}
jest.mock('src/lib/apollo', () => ({
  initializeApollo: () => ({
    query: () => mockQueryResponse,
  }),
}))

describe('UserProfilePage', () => {
  beforeEach(() => {
    require('next-auth/client').__setMockSession({
      user: null,
      expires: '',
    })

    mockQueryResponse = {
      loading: false,
      error: null,
      data: {},
    }
  })

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

  describe('getServerSideProps', () => {
    const callGetServerSideProps = async () => {
      return await getServerSideProps({
        //@ts-ignore
        req: {},
        //@ts-ignore
        res: {},
        query: {},
        resolvedUrl: '',
      })
    }

    const mockGoodSession = () => {
      require('next-auth/client').__setMockSession({
        user: ExampleUser,
        expires: '',
      })
    }

    it('should redirect if there is no session', async () => {
      const resp = await callGetServerSideProps()
      expect(resp?.redirect?.destination).toBe('/')
    })

    it('should return loading while query is in process', async () => {
      mockGoodSession()
      mockQueryResponse = {
        ...mockQueryResponse,
        loading: true,
      }
      const resp = await callGetServerSideProps()
      expect(resp?.props?.loading).toBe(true)
    })

    it('should return an error if there is one', async () => {
      mockGoodSession()

      const errorString = 'there was an error'
      mockQueryResponse = {
        ...mockQueryResponse,
        error: errorString,
      }
      const resp = await callGetServerSideProps()
      expect(resp?.props?.error).toBe(errorString)
    })

    it('should return undefined if no user is found', async () => {
      mockGoodSession()
      const resp = await callGetServerSideProps()
      expect(resp?.props?.user).toBe(undefined)
    })

    it('should return the queried user', async () => {
      mockGoodSession()

      mockQueryResponse = {
        ...mockQueryResponse,
        data: {
          user: ExampleUser,
        },
      }
      const resp = await callGetServerSideProps()
      expect(resp?.props?.user).toBe(ExampleUser)
    })
  })
})
