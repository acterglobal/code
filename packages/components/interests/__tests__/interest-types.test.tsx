/**
 * @jest-environment jsdom
 */
import * as React from 'react'

import { InterestTypes } from '@acter/components/interests/interest-types'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { render, screen } from '@acter/lib/test-utils'
import { Interests } from '@acter/schema/fixtures/interest/interests'

jest.mock('@acter/lib/i18n/use-translation')

describe('[Interest Types]', () => {
  const mockUseTranslation = useTranslation as jest.Mock

  it('should show interests for a type', () => {
    mockUseTranslation.mockReturnValue({ t: () => null })

    const rootType = Interests.data.interestTypes.find(
      (type) => type.name === 'root'
    )

    const types = Interests.data.interestTypes.filter(
      (type) => type.parentInterestTypeId === rootType.id
    )
    // eslint-disable-next-line
    render(
      <InterestTypes type={types[0]} allTypes={Interests.data.interestTypes} />
    )
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(32)
    expect(items.map((item) => `interests.${item.textContent}`)).toContain(
      'interests.air'
    )
  })
})
