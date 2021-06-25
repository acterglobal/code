import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo } from '@acter/lib/apollo'

import { InterestType } from '@schema'

import QUERY_ALL_INTERESTS from '@acter/schema/queries/query-all-interests-by-type.graphql'

export const getInterests: ComposedGetServerSideProps = async () => {
  const apollo = initializeApollo()

  const { data, error } = await apollo.query({
    query: QUERY_ALL_INTERESTS,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { interestTypes }: { interestTypes: [InterestType] } = data
  return {
    props: {
      interestTypes,
    },
  }
}
