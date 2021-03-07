import React from 'react'
import { render } from '@testing-library/react'
import { NextRouter } from 'next/router'

jest.mock('@apollo/client', () => ({
  useMutation: () => [() => void 0, { loading: false, error: false }],
}))
jest.mock('next-auth/client')
jest.mock('src/lib/apollo')

import {
  NewActerPage,
  _handleOnComplete,
  _handleSubmit,
} from 'src/pages/[acterType]/new'

import { Acter, ActerType } from '@generated/type-graphql'
import {
  ExampleActer,
  OrganisationActerType,
  UserActerType,
} from 'src/__fixtures__'
import { ORGANISATION } from 'src/constants'

describe('NewActerPage', () => {
  describe('_handleSubmit', () => {
    it.skip('should create a function that sends Acter data as variables', async () => {
      const createActerFn = jest.fn()
      const updateActerFn = jest.fn()
      const onSubmitFn = _handleSubmit(
        createActerFn,
        updateActerFn,
        UserActerType
      )
      onSubmitFn({ name: ExampleActer.name } as Acter)

      const { name, slug } = ExampleActer
      expect(createActerFn).toHaveBeenCalledWith({
        variables: {
          acterTypeId: UserActerType.id,
          name,
        },
      })
    })
  })

  describe('_handleOnComplete', () => {
    it.skip('should redirect to the Acter page', () => {
      const push = jest.fn()
      const onCompleteFn = _handleOnComplete(
        ({ push } as unknown) as NextRouter,
        OrganisationActerType
      )
      onCompleteFn({
        createActer: { ...ExampleActer, ActerType: OrganisationActerType },
      })
      expect(push).toHaveBeenCalledWith('/organisations/my-organisation')
    })
  })

  it.skip('should reneder the new acter page', () => {
    render(<NewActerPage acterType={{ name: ORGANISATION } as ActerType} />)
  })
})
