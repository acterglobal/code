import React from 'react'
import { render, screen } from '@testing-library/react'

import { AddActerMenu } from 'src/components/acter/add-acter-widget/add-acter-menu'

import { ActerType } from '@generated/type-graphql'

import {
  UserActerType,
  OrganizationActerType,
  NetworkActerType,
} from 'src/__fixtures__'

describe('AddActerMenu', () => {
  it('should display a list of links only only as allowd by ActerTypeRules', () => {
    const acterTypes: ActerType[] = [
      UserActerType,
      OrganizationActerType,
      NetworkActerType,
    ]

    render(
      <AddActerMenu currentActerType={UserActerType} acterTypes={acterTypes} />
    )

    expect(screen.queryByRole('link', { name: 'Add User' })).toBeFalsy()
    expect(
      screen.queryByRole('link', { name: 'Add Organization' })
    ).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'Add Network' })).toBeTruthy()
  })
})
