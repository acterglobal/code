import React from 'react'
import { useRouter } from 'next/router'
import { render, screen } from '@acter/lib/test-utils'
import { MuiThemeProvider } from '@material-ui/core'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'
import { HeaderSection } from '@acter/components/acter/landing-page/header-section'
import { theme } from '@acter/components/themes/acter-theme'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'

jest.mock('next/router')
jest.mock('@acter/lib/acter/use-acter')
jest.mock('@acter/lib/user/use-user')

const user = {
  ...ExampleUser,
}

describe('[Header Section]', () => {
  const mockUseActer = useActer as jest.Mock
  const mockUseRouter = useRouter as jest.Mock
  const mockUseUser = useUser as jest.Mock
  beforeEach(() => {
    mockUseUser.mockReturnValue({ user, loading: false })
    mockUseActer.mockReturnValue({ acter: ExampleActer, loading: false })
    mockUseRouter.mockReturnValue({
      query: {},
    })
  })

  it('should render the header section component with correct content', () => {
    render(
      <MuiThemeProvider theme={theme}>
        <HeaderSection onJoin={jest.fn()} onLeave={jest.fn()} loading={false} />
      </MuiThemeProvider>
    )
    expect(screen.getByRole('acter-name')).toHaveTextContent(
      'Greenlight Aarhus'
    )
    expect(screen.getByRole('acter-location')).toHaveTextContent(
      'Aarhus Denmark'
    )
  })
})
