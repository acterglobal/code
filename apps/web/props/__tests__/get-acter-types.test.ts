import { getActerTypes } from '../get-acter-types'

import { ComposedGetServerSidePropsContext } from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from '@acter/lib/fixtures'
import { getUrqlClient } from '@acter/lib/urql'

jest.mock('@acter/lib/urql')

describe('getActerTypes', () => {
  const acterTypes = [GroupActerType, NetworkActerType, OrganisationActerType]
  let context = ({} as unknown) as ComposedGetServerSidePropsContext
  const mockGetUrqlClient = getUrqlClient as jest.Mock

  beforeEach(() => {
    mockGetUrqlClient.mockReset()
    context = ({} as unknown) as ComposedGetServerSidePropsContext
  })
  it('should return an error if acter type query fails', async () => {
    const error = 'there was an error'
    mockGetUrqlClient.mockReturnValue({
      query: () => ({
        toPromise: () => ({
          error,
        }),
      }),
    })

    expect(await getActerTypes(context)).toStrictEqual(
      expect.objectContaining({
        props: {
          error,
        },
      })
    )
  })
  it('should set selected acter type as well as list of all acter types', async () => {
    mockGetUrqlClient.mockReturnValue({
      query: () => ({
        toPromise: () => ({
          data: { acterTypes },
        }),
      }),
    })
    context = ({
      params: { acterType: ActerTypes.ORGANISATION },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await getActerTypes(context)).toStrictEqual({
      props: {
        acterTypes,
      },
    })
  })
})
