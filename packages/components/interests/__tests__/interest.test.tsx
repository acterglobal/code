import React from 'react'
import { render } from '@testing-library/react'
import { Interest } from '@acter/components/interests/interest'
import { ExampleInterest } from '@acter/schema/fixtures/interest/example-interests'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'

describe('[Interest]', () => {
  it('should render Tag interest with correct info and styles', () => {
    const { container } = render(
      <ActerThemeProvider>
        <Interest
          interest={ExampleInterest}
          type={ExampleInterest.InterestType.name}
        />
      </ActerThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
