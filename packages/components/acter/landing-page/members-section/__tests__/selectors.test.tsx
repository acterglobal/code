/**
 * @jest-environment jsdom
 */
import React from 'react'

import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { render, screen } from '@acter/lib/test-utils'

jest.mock('@acter/lib/i18n/use-translation')

const FOO = 'Foo'
const BAR = 'Bar'
const selectors = [FOO, BAR]
const onChange = () => null

describe('<Selectors>', () => {
  const mockUseTranslation = useTranslation as jest.Mock

  beforeEach(() => {
    mockUseTranslation.mockReturnValue({ t: (key) => key })
  })

  it('should display a button for each selector', async () => {
    render(
      <Selectors
        selectors={[FOO, BAR]}
        activeSelector={FOO}
        totalResults={0}
        onChange={onChange}
      />
    )
    expect(screen.getByRole('tablist')).toBeTruthy()
    const tabs = await screen.findAllByRole('tab')
    expect(tabs).toHaveLength(2)
    expect(tabs[0].textContent).toBe(FOO)
    expect(tabs[1].textContent).toBe(BAR)
  })

  it('should display number of results', async () => {
    render(
      <Selectors
        selectors={[FOO, BAR]}
        activeSelector={FOO}
        totalResults={10}
        onChange={onChange}
      />
    )

    expect(screen.getByRole('heading', { name: '10 Foos' })).toBeTruthy()
  })

  it('should highlight the selected tab', () => {
    const { asFragment } = render(
      <Selectors
        selectors={selectors}
        activeSelector={FOO}
        totalResults={10}
        onChange={onChange}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
