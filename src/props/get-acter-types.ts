import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo } from '@acter/lib/apollo'

import { ActerType } from '@schema'

import QUERY_ACTER_TYPES from 'api/queries/query-acter-types.graphql'

/**
 * Gets all known ActerTypes
 * @returns props including an array of acterTypes
 */
export const getActerTypes: ComposedGetServerSideProps = async () => {
  const apollo = initializeApollo()

  const { data, error } = await apollo.query({
    query: QUERY_ACTER_TYPES,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { acterTypes }: { acterTypes: [ActerType] } = data
  return {
    props: {
      acterTypes,
    },
  }
}
