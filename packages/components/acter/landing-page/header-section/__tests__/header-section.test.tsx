import React from 'react'

import { useRouter } from 'next/router'

import { MuiThemeProvider } from '@material-ui/core'

import { HeaderSection } from '@acter/components/acter/landing-page/header-section'
import { theme } from '@acter/components/themes/acter-theme'
import { useActer } from '@acter/lib/acter/use-acter'
import { render, screen } from '@acter/lib/test-utils'
import { useUser } from '@acter/lib/user/use-user'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/acter/use-acter')
jest.mock('@acter/lib/user/use-user')
jest.mock('@acter/lib/acter/use-create-connection')
jest.mock('@acter/lib/acter/use-delete-connection')

const user = {
  ...ExampleUser,
}

describe('[Header Section]', () => {
  const mockUseActer = useActer as jest.Mock
  const mockUseRouter = useRouter as jest.Mock
  const mockUseUser = useUser as jest.Mock
  beforeEach(() => {
    mockUseUser.mockReturnValue({ user, fetching: false })
    mockUseActer.mockReturnValue({ acter: ExampleActer, fetching: false })
    mockUseRouter.mockReturnValue({
      query: {},
      route: '',
    })
  })

  it('should render the header section component with correct content', () => {
    render(
      <MuiThemeProvider theme={theme}>
        <HeaderSection />
      </MuiThemeProvider>
    )
    expect(screen.getByRole('acter-name')).toHaveTextContent(
      'Greenlight Aarhus'
    )
    expect(screen.getByRole('acter-type')).toHaveTextContent('Organisation')
    expect(screen.getByRole('acter-location')).toHaveTextContent(
      'Aarhus Denmark'
    )
  })
})
