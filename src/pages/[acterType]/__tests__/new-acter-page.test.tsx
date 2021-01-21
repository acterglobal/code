import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import { NextRouter } from 'next/router'

jest.mock('next-auth/client')
jest.mock('src/lib/apollo')

import {
  NewActerPage,
  getServerSideProps,
  _acterTypeAsUrl,
  _handleOnComplete,
  _handleSubmit,
} from 'src/pages/[acterType]/new'

import { Acter, ActerType } from '@generated/type-graphql'
import {
  ExampleActer,
  ExampleGroupType,
  ExampleNetworkType,
  ExampleOrganizationType,
} from 'src/__fixtures__'

describe('NewActerPage', () => {
  describe('_acterTypeAsUrl', () => {
    it('should convert an ActerType name to pluralized lower-case', () => {
      expect(_acterTypeAsUrl(ExampleOrganizationType)).toBe('organizations')
    })
  })

  describe('_handleSubmit', () => {
    it('should create a function that sends Acter data as variables', async () => {
      const createActerFn = jest.fn()
      const onSubmitFn = _handleSubmit(createActerFn, ExampleOrganizationType)
      onSubmitFn({ name: ExampleActer.name } as Acter)

      const { name, slug } = ExampleActer
      expect(createActerFn).toHaveBeenCalledWith({
        variables: {
          acterTypeId: ExampleOrganizationType.id,
          name,
          slug,
        },
      })
    })
  })

  describe('_handleOnComplete', () => {
    it('should redirect to the Acter page', () => {
      const push = jest.fn()
      const onCompleteFn = _handleOnComplete(
        ({ push } as unknown) as NextRouter,
        ExampleOrganizationType
      )
      onCompleteFn(ExampleActer)
      expect(push).toHaveBeenCalledWith('/organizations/my-organization')
    })
  })

  it('should reneder the new acter page', () => {
    render(<NewActerPage acterType={{ name: 'test' } as ActerType} />)
  })

  describe('getServerSideProps', () => {
    let acterTypes = [
      ExampleGroupType,
      ExampleNetworkType,
      ExampleOrganizationType,
    ]
    let context = ({} as unknown) as GetServerSidePropsContext

    beforeEach(() => {
      context = ({} as unknown) as GetServerSidePropsContext
    })
    it('should return an error if acter type query fails', async () => {
      const error = 'there was an error'
      require('src/lib/apollo').__setApolloQueryResponse({ error })

      expect(await getServerSideProps(context)).toStrictEqual(
        expect.objectContaining({
          props: {
            error,
          },
        })
      )
    })
    it('should return not found if acter type is not found', async () => {
      require('src/lib/apollo').__setApolloQueryResponse({
        data: { acterTypes },
      })
      context = ({
        params: { acterType: 'foos' },
      } as unknown) as GetServerSidePropsContext

      expect(await getServerSideProps(context)).toStrictEqual(
        expect.objectContaining({
          notFound: true,
        })
      )
    })
    it('should set selected acter type as well as list of all acter types', async () => {
      require('src/lib/apollo').__setApolloQueryResponse({
        data: { acterTypes },
      })
      context = ({
        params: { acterType: 'organizations' },
      } as unknown) as GetServerSidePropsContext

      expect(await getServerSideProps(context)).toStrictEqual(
        expect.objectContaining({
          props: {
            acterTypes,
            acterType: ExampleOrganizationType,
          },
        })
      )
    })
  })
})
