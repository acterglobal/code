import React from 'react'

import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { render, screen } from '@acter/lib/test-utils'

const FOO = 'Foo'
const BAR = 'Bar'
const selectors = [FOO, BAR]
const onChange = () => null

describe('<Selectors>', () => {
  it('should display a button for each selector', async () => {
    render(
      <Selectors
        selectors={[FOO, BAR]}
        activeSelector={null}
        onChange={onChange}
      />
    )
    expect(screen.getByRole('tablist')).toBeTruthy()
    const tabs = await screen.findAllByRole('tab')
    expect(tabs).toHaveLength(2)
    expect(tabs[0].textContent).toBe(FOO)
    expect(tabs[1].textContent).toBe(BAR)
  })

  it('should should highlight the selected tab', () => {
    const { asFragment } = render(
      <Selectors
        selectors={selectors}
        activeSelector={FOO}
        onChange={onChange}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
