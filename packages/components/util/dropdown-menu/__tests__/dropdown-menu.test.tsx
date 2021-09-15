import React from 'react'

import { MenuItem } from '@material-ui/core'
import userEvent from '@testing-library/user-event'

import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { render, screen } from '@acter/lib/test-utils'

const Anchor = () => <div>Foo</div>

describe('SessionMenu', () => {
  it('hides the menu by default', () => {
    render(
      <DropdownMenu anchorNode={<Anchor />}>
        <MenuItem>Bar</MenuItem>
      </DropdownMenu>
    )

    expect(screen.queryByRole('menu')).toBeFalsy()
    expect(screen.queryByRole('menuitem', { name: 'Bar' })).toBeFalsy()
  })

  it('shows the menu on anchor click', async () => {
    // const onClose = jest.fn()

    render(
      <DropdownMenu anchorNode={<Anchor />}>
        <MenuItem>Bar</MenuItem>
      </DropdownMenu>
    )

    userEvent.click(await screen.getByText('Foo'))

    expect(screen.queryByRole('menu')).toBeTruthy()
    expect(screen.queryByRole('menuitem', { name: 'Bar' })).toBeTruthy()
  })
})
