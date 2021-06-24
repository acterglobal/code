import { InterestsSection } from '@acter/components/interests/interests-section'
import { render, screen } from '@testing-library/react'

import { Interests } from 'src/__fixtures__'

describe('Interest Section', () => {
  it.skip('should render 3 top level interest types (Focus, Approach, Tag)', () => {
    // Take first 2 from each type
    const selectedInterests = Interests.data.interestTypes.reduce(
      (interests, type) => [...interests, ...type.Interests.slice(0, 2)],
      []
    )

    render(
      <InterestsSection
        interestTypes={Interests.data.interestTypes}
        selected={selectedInterests}
      />
    )
    // 2 interests each in Environment, Approach, Social, Economy, Tags and 1 in Focus.
    expect(screen.getAllByRole('list')).toHaveLength(8)
    expect(screen.getAllByRole('listitem')).toHaveLength(11)
  })
})
