import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo } from 'src/lib/apollo'

import { InterestType } from '@generated/type-graphql'

import QUERY_ALL_INTERESTS from 'api/queries/query-all-interests-by-type.graphql'

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
