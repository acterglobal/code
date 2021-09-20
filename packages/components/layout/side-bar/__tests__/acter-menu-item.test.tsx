import React from 'react'

import { useRouter } from 'next/router'

import { ForumOutlined as ForumIcon } from '@material-ui/icons'

import { ActerMenuItem } from '@acter/components/acter/layout/menu/items/item'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { useUpdateNotifications } from '@acter/lib/notification/use-update-notifications'
import { render, screen } from '@acter/lib/test-utils'
import { ExampleActer } from '@acter/schema/fixtures'

jest.mock('next/router')
jest.mock('@acter/lib/acter/get-landing-page-tab')
jest.mock('@acter/lib/notification/use-update-notifications')
jest.mock('@acter/lib/acter-types/use-acter-types')

describe('ActerMenuItem', () => {
  const mockNextRouter = useRouter as jest.Mock
  const mockGetLandingPageTab = getLandingPageTab as jest.Mock
  const mockUseUpdateNotifications = useUpdateNotifications as jest.Mock
  const mockUseActerTypes = useActerTypes as jest.Mock

  beforeEach(() => {
    mockNextRouter.mockClear()
    mockNextRouter.mockReturnValue({ query: {} })
    mockGetLandingPageTab.mockReturnValue('foo')
    mockUseUpdateNotifications.mockReturnValue([])
    mockUseActerTypes.mockReturnValue({
      acterTypes: [],
    })
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
    const fooTab = 'foo'
    mockNextRouter.mockReturnValue({ query: { tab: [fooTab] } })
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })

  it('should display first item as selected when tab prop not set', () => {
    const fooTab = 'foo'
    mockNextRouter.mockReturnValue({ query: { tab: [fooTab] } })
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })

  it('should set inactive tab', () => {
    mockGetLandingPageTab.mockReturnValue('bar')
    render(<ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={'foo'} />)

    expect(screen.getByRole('listitem')).toHaveAttribute(
      'aria-current',
      'false'
    )
  })
})
