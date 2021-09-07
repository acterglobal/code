import React from 'react'
import { render, screen } from '@acter/lib/test-utils'
import { MuiThemeProvider } from '@material-ui/core'
import { ExampleUser } from '@acter/schema/fixtures'
import { HeaderSection } from '@acter/components/acter/landing-page/header-section'
import { theme } from '@acter/components/themes/acter-theme'
import { useUser } from '@acter/lib/user/use-user'

jest.mock('@acter/lib/user/use-user')

const user = {
  ...ExampleUser,
}

describe('[Header Section]', () => {
  const mockUseUser = useUser as jest.Mock
  beforeEach(() => {
    mockUseUser.mockReturnValue([user, { loading: false }])
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
