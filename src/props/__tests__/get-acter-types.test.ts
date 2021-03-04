import { ComposedGetServerSidePropsContext } from 'src/lib/compose-props'

jest.mock('@apollo/client', () => ({
  useMutation: () => [() => void 0, { loading: false, error: false }],
}))
jest.mock('next-auth/client')
jest.mock('src/lib/apollo')

import {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from 'src/__fixtures__'

import { getActerTypes } from 'src/props'

describe('getActerTypes', () => {
  const acterTypes = [GroupActerType, NetworkActerType, OrganisationActerType]
  let context = ({} as unknown) as ComposedGetServerSidePropsContext

  beforeEach(() => {
    context = ({} as unknown) as ComposedGetServerSidePropsContext
  })
  it('should return an error if acter type query fails', async () => {
    const error = 'there was an error'
    // eslint-disable-next-line
    require('src/lib/apollo').__setApolloQueryResponse({ error })

    expect(await getActerTypes(context)).toStrictEqual(
      expect.objectContaining({
        props: {
          error,
        },
      })
    )
  })
  it('should set selected acter type as well as list of all acter types', async () => {
    // eslint-disable-next-line
    require('src/lib/apollo').__setApolloQueryResponse({
      data: { acterTypes },
    })
    context = ({
      params: { acterType: 'organisations' },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await getActerTypes(context)).toStrictEqual({
      props: {
        acterTypes,
      },
    })
  })
})
