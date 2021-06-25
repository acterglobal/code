import React from 'react'
import { render } from '@testing-library/react'
import { Interest } from '@acter/components/interests/interest'
import { ExampleInterest } from '@acter/schema/fixtures/interest/example-interests'

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
