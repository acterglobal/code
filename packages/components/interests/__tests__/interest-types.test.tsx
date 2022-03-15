/**
 * @jest-environment jsdom
 */
import * as React from 'react'

import { InterestTypes } from '@acter/components/interests/interest-types'
import { render, screen } from '@acter/lib/test-utils'
import { Interests } from '@acter/schema/fixtures/interest/interests'

describe('[Interest Types]', () => {
  it('should show interests for a type', () => {
    const rootType = Interests.data.interestTypes.find(
      (type) => type.name === 'root'
    )

    const types = Interests.data.interestTypes.filter(
      (type) => type.parentInterestTypeId === rootType.id
    )

    render(
      <InterestTypes type={types[0]} allTypes={Interests.data.interestTypes} />
    )
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(32)
    expect(items.map((item) => item.textContent)).toContain('Air')
  })
})
