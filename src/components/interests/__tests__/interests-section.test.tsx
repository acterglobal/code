import { InterestsSection } from 'src/components/interests/interests-section'
import { render, screen } from '@testing-library/react'

import { Interests } from 'src/__fixtures__'

describe('[Interest Section]', () => {
  it('should render 3 top level interest types (Focus, Approach, Tag)', () => {
    render(<InterestsSection interestTypes={Interests.data.interestTypes} />)
    expect(screen.getAllByRole('interests-section')).toHaveLength(3)
    expect(screen.getAllByRole('interests-section')[0]).toHaveTextContent(
      'Focus'
    )
    expect(screen.getAllByRole('interests-section')[1]).toHaveTextContent(
      'Approach'
    )
    expect(screen.getAllByRole('interests-section')[2]).toHaveTextContent(
      'Tags'
    )
  })
})
