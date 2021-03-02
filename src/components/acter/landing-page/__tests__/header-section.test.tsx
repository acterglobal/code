import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExampleActer } from 'src/__fixtures__'
import { HeaderSection } from 'src/components/acter/landing-page/header-section'

describe('[Header Section]', () => {
  it('should render the header section component with correct content', () => {
    render(<HeaderSection acter={ExampleActer} />)
    expect(screen.getByRole('acter-name')).toHaveTextContent(
      'Greenlight Aarhus'
    )
    expect(screen.getByRole('acter-location')).toHaveTextContent(
      'Aarhus Denmark'
    )
  })
})
