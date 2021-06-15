import React from 'react'
import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import { ForumOutlined as ForumIcon } from '@material-ui/icons'
import { ActerMenuItem } from 'src/components/layout/side-bar/acter-menu-item'
import { ExampleActer } from 'src/__fixtures__'

jest.mock('next/router')

describe('ActerMenuItem', () => {
  const mockNextRouter = useRouter as jest.Mock

  beforeEach(() => {
    mockNextRouter.mockClear()
    mockNextRouter.mockReturnValue({ query: {} })
  })

  it('should render an item', () => {
    render(
      <ActerMenuItem
        acter={ExampleActer}
        Icon={ForumIcon}
        path="foo"
        text="Bar"
      />
    )
    expect(screen.getByRole('link', { name: 'Bar' })).toBeTruthy()
  })

  it('should use the path for display text when text prop not set', () => {
    render(<ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path="foo" />)
    expect(screen.getByRole('link', { name: 'foo' })).toBeTruthy()
  })

  it('should display as selected when router tab matches path', () => {
    const fooTab = 'activities'
    mockNextRouter.mockReturnValue({
      query: {
        tab: [fooTab],
      },
    })
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })

  it('should display first item as selected when tab prop not set', () => {
    const fooTab = 'forum'
    mockNextRouter.mockReturnValue({
      query: {
        tab: [fooTab],
      },
    })
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })
})
