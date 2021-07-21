import React from 'react'
import { render, screen } from '@acter/lib/test-utils'
import { MuiThemeProvider } from '@material-ui/core'
import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'
import { HeaderSection } from '@acter/components/acter/landing-page/header-section'
import { theme } from '@acter/components/themes/acter-theme'

describe('[Header Section]', () => {
  it('should render the header section component with correct content', () => {
    render(
      <MuiThemeProvider theme={theme}>
        <HeaderSection
          acter={ExampleActer}
          user={ExampleUser}
          onJoin={jest.fn()}
          onLeave={jest.fn()}
          loading={false}
        />
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
