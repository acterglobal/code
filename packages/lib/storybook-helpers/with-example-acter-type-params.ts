import { ActerType } from '@acter/schema'
import { NetworkActerType, OrganisationActerType } from '@acter/schema/fixtures'

export type ExampleActerTypeParamsUrqlReturn = {
  data: {
    acterTypes: ActerType[]
  }
}

export const withExampleActerTypeParams = {
  urql: (): ExampleActerTypeParamsUrqlReturn => ({
    data: {
      acterTypes: [OrganisationActerType, NetworkActerType],
    },
  }),
}
