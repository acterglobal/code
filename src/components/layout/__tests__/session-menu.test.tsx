import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SessionMenu } from 'src/components/layout/session-menu'

const Wrapper = ({ children }) => (
  <>
    <div aria-label="anchor">Foo</div>
    {children}
  </>
)

describe('SessionMenu', () => {
  it('hides the menu', () => {
    render(
      <Wrapper>
        <SessionMenu
          menuAnchorEl={document.createElement('div')}
          signedInAs="foo"
          isMenuOpen={false}
          onCloseMenu={() => null}
          onSignOut={() => null}
        />
      </Wrapper>
    )

    expect(screen.queryByRole('menu')).toBeFalsy()
  })

  it('should close the menu and sign out whem "Sign Out" clicked', async () => {
    const onClose = jest.fn()
    const onSignOut = jest.fn()

    render(
      <Wrapper>
        <SessionMenu
          menuAnchorEl={document.createElement('div')}
          signedInAs="foo"
          isMenuOpen={true}
          onCloseMenu={onClose}
          onSignOut={() => null}
        />
      </Wrapper>
    )

    userEvent.click(await screen.getByRole('menuitem', { name: 'Sign Out' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
