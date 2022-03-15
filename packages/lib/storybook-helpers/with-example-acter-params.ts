import { Parameters } from '@storybook/csf'

import { pluralize } from '@acter/lib/string/pluralize'
import { Acter } from '@acter/schema'
import { OrganisationActerType, ExampleActer } from '@acter/schema/fixtures'

import { withExampleActerTypeParams, ExampleActerTypeParamsUrqlReturn } from '.'

export type ExampleActerParamsUrqlReturn = ExampleActerTypeParamsUrqlReturn & {
  data: { findFirstActer: Acter }
}

export const withExampleActerParams = (acter = ExampleActer): Parameters => ({
  nextRouter: {
    path: '[acterType]/[slug]',
    asPath: `/${pluralize(OrganisationActerType.name)}/${acter.slug}`,
    query: {
      slug: acter.slug,
    },
  },
  urql: (): ExampleActerParamsUrqlReturn => ({
    data: {
      ...withExampleActerTypeParams.urql().data,
      findFirstActer: acter,
    },
  }),
})
