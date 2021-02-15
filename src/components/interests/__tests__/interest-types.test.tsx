import { render, screen } from '@testing-library/react'
import { Interests } from '../../../__fixtures__/interest/interests'
import InterestTypes from '../interest-types'

describe('[Interest Types]', () => {
  it('should PASS if correct number of interests of each types(Focus, Approach, Tags) are rendered', () => {
    const rootType = Interests.data.interestTypes.find(
      (type) => type.name === 'root'
    )

    const types = Interests.data.interestTypes.filter(
      (type) => type.parentInterestTypeId === rootType.id
    )

    const { rerender } = render(
      <InterestTypes type={types[0]} allTypes={Interests.data.interestTypes} />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(30)
    expect(
      screen.getByRole('listitem', { name: 'Transportation' })
    ).toBeTruthy()

    rerender(
      <InterestTypes type={types[1]} allTypes={Interests.data.interestTypes} />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(20)
    expect(screen.getByRole('listitem', { name: 'Debate' })).toBeTruthy()

    rerender(
      <InterestTypes type={types[2]} allTypes={Interests.data.interestTypes} />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(24)
    expect(screen.getByRole('listitem', { name: 'GreenNewDeal' })).toBeTruthy()
  })
})
