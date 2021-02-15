import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExampleActer } from '../../../__fixtures__/acter/example-acter'
import HeaderSection from '../header-section'

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
