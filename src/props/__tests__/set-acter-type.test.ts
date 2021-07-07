import { ComposedGetServerSidePropsContext } from '@acter/lib/compose-props'

import {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from '@acter/schema/fixtures'

import { setActerType } from 'src/props/set-acter-type'
import { ActerTypes } from '@acter/lib/constants'

describe('setActerType', () => {
  const acterTypes = [GroupActerType, NetworkActerType, OrganisationActerType]
  let context = ({} as unknown) as ComposedGetServerSidePropsContext

  it('should return not found if acter type is not found', async () => {
    context = ({
      props: { acterTypes },
      params: { acterType: 'foos' },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await setActerType(context)).toStrictEqual(
      expect.objectContaining({
        notFound: true,
      })
    )
  })
  it('should set selected acter type as well as list of all acter types', async () => {
    context = ({
      props: { acterTypes },
      params: { acterType: `${ActerTypes.ORGANISATION}s` },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await setActerType(context)).toStrictEqual({
      props: {
        acterType: OrganisationActerType,
      },
    })
  })
})
