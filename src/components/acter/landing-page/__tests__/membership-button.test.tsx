import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { v4 } from 'uuid'
import {
  MembershipButton,
  MembershipButtonProps,
} from 'src/components/acter/landing-page/membership-button'
import { Acter, User } from '@generated/type-graphql'

const defaultProps: MembershipButtonProps = {
  acter: ({} as Partial<Acter>) as Acter,
  user: ({} as Partial<User>) as Acter,
  onJoin: () => Promise.resolve(void 0),
  onLeave: () => Promise.resolve(void 0),
}

describe('MembershipButton', () => {
  it('should show nothing if Acter is owned by the User', () => {
    const user = {
      id: v4(),
    } as Partial<User>
    const acter = {
      id: v4(),
      createdByUserId: user.id,
    } as Partial<Acter>

    render(
      <MembershipButton
        {...defaultProps}
        acter={acter as Acter}
        user={user as Acter}
      />
    )
    expect(screen.queryByRole('button')).toBeFalsy()
  })

  it('should show nothing if the Acter IS the User Acter', () => {
    const acter = {
      id: v4(),
      createdByUserId: v4(),
    } as Partial<Acter>
    const user = {
      id: v4(),
      Acter: acter,
    } as Partial<User>

    render(
      <MembershipButton
        {...defaultProps}
        acter={acter as Acter}
        user={user as Acter}
      />
    )
    expect(screen.queryByRole('button')).toBeFalsy()
  })

  it('should show the "Join" button when User is not yet following Acter', async () => {
    const acter = {
      id: v4(),
      createdByUserId: v4(),
    } as Partial<Acter>
    const user = {
      id: v4(),
      Acter: {
        id: v4(),
        Following: [],
      } as Acter,
    } as Partial<User>

    const onJoin = jest.fn()

    render(
      <MembershipButton
        {...defaultProps}
        acter={acter as Acter}
        user={user as Acter}
        onJoin={onJoin}
      />
    )
    const button = await screen.queryByRole('button', { name: 'Join' })
    expect(button).toBeTruthy()
    userEvent.click(button)
    expect(onJoin).toHaveBeenCalledWith(user.Acter, acter)
  })

  it('should show the "Leave" button when User is following this Acter', async () => {
    const acter = {
      id: v4(),
      createdByUserId: v4(),
    } as Partial<Acter>
    const user = {
      id: v4(),
      Acter: {
        id: v4(),
        Following: [{ Following: acter }],
      } as Acter,
    } as Partial<User>

    const onLeave = jest.fn()

    render(
      <MembershipButton
        {...defaultProps}
        acter={acter as Acter}
        user={user as Acter}
        onLeave={onLeave}
      />
    )
    const button = await screen.queryByRole('button', { name: 'Leave' })
    expect(button).toBeTruthy()
    userEvent.click(button)
    expect(onLeave).toBeCalledWith(user.Acter, acter)
  })
})
