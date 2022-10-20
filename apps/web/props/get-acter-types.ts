import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { getUrqlClient } from '@acter/lib/urql'
import { ActerType } from '@acter/schema'
import QUERY_ACTER_TYPES from '@acter/schema/queries/query-acter-types.graphql'

/**
 * Gets all known ActerTypes
 * @returns props including an array of acterTypes
 */
export const getActerTypes: ComposedGetServerSideProps = async () => {
  const { data, error } = await getUrqlClient()
    .query(QUERY_ACTER_TYPES, {})
    .toPromise()

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
