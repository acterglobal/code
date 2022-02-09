import React from 'react'

import { Interest } from '@acter/components/interests/interest'
import { ExampleInterest } from '@acter/lib/fixtures/interest/example-interests'
import { render } from '@acter/lib/test-utils'

describe('[Interest]', () => {
  it('should render Tag interest with correct info and styles', () => {
    const { container } = render(
      <Interest
        interest={ExampleInterest}
        type={ExampleInterest.InterestType.name}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
