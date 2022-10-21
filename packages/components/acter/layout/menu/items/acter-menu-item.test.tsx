/**
 * @jest-environment jsdom
 */
import React from 'react'


import { ForumOutlined as ForumIcon } from '@material-ui/icons'

import { ActerMenuItem } from '@acter/components/acter/layout/menu/items/item'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { ActerMenu } from '@acter/lib/constants'
import { useNotifications } from '@acter/lib/notification/use-notifications'
import { useUpdateNotifications } from '@acter/lib/notification/use-update-notifications'
import { render, screen } from '@acter/lib/test-helpers'
import { ExampleActer } from '@acter/schema/fixtures'


jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");


jest.mock('@acter/lib/acter/get-landing-page-tab')
jest.mock('@acter/lib/notification/use-notifications')
jest.mock('@acter/lib/notification/use-update-notifications')
jest.mock('@acter/lib/acter-types/use-acter-types')

describe('ActerMenuItem', () => {
  const mockNextRouter = useRouter as jest.Mock
  const mockGetLandingPageTab = getLandingPageTab as jest.Mock
  const mockUseNotifications = useNotifications as jest.Mock
  const mockUseUpdateNotifications = useUpdateNotifications as jest.Mock
  const mockUseActerTypes = useActerTypes as jest.Mock

  const fooTab = 'foo' as ActerMenu

  beforeEach(() => {
    mockNextRouter.mockClear()
    mockNextRouter.mockReturnValue({ query: {} })
    mockGetLandingPageTab.mockReturnValue('foo')
    mockUseNotifications.mockReturnValue({ reexecuteQuery: jest.fn })
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
        path={fooTab}
        text="Bar"
      />
    )
    expect(screen.getByRole('link', { name: 'Bar' })).toBeTruthy()
  })

  it('should use the path for display text when text prop not set', () => {
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )
    expect(screen.getByRole('link', { name: 'foo' })).toBeTruthy()
  })

  it('should display as selected when router tab matches path', () => {
    mockNextRouter.mockReturnValue({ query: { slug: 'example-slug' } })
    render(
      <ActerMenuItem
        acter={{ ...ExampleActer, slug: 'example-slug' }}
        Icon={ForumIcon}
        path={fooTab}
      />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })

  it('should display first item as selected when tab prop not set', () => {
    mockNextRouter.mockReturnValue({ query: { slug: 'example-slug' } })
    render(
      <ActerMenuItem
        acter={{ ...ExampleActer, slug: 'example-slug' }}
        Icon={ForumIcon}
        path={fooTab}
      />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'true')
  })

  it('should set inactive tab', () => {
    mockGetLandingPageTab.mockReturnValue('bar')
    render(
      <ActerMenuItem acter={ExampleActer} Icon={ForumIcon} path={fooTab} />
    )

    expect(screen.getByRole('listitem')).toHaveAttribute(
      'aria-current',
      'false'
    )
  })
})
