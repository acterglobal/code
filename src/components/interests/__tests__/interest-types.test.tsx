import { render, screen } from '@testing-library/react'
import { Interests } from 'src/__fixtures__/interest/interests'
import { InterestTypes } from 'src/components/interests/interest-types'

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
    expect(items).toHaveLength(31)
    expect(items.map((item) => item.textContent)).toContain('Air')
  })
})
