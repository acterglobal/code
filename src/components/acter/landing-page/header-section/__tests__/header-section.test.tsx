jest.mock('next/router')

import React from 'react'
import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import { ExampleActer, ExampleUser } from 'src/__fixtures__'
import { HeaderSection } from 'src/components/acter/landing-page/header-section'

describe('[Header Section]', () => {
  it('should render the header section component with correct content', () => {
    useRouter.mockResolvedValue()
    render(
      <HeaderSection
        acter={ExampleActer}
        user={ExampleUser}
        onJoin={jest.fn()}
        onLeave={jest.fn()}
        loading={false}
      />
    )
    expect(screen.getByRole('acter-name')).toHaveTextContent(
      'Greenlight Aarhus'
    )
    expect(screen.getByRole('acter-location')).toHaveTextContent(
      'Aarhus Denmark'
    )
  })
})
