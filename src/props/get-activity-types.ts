import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo } from '@acter/lib/apollo'

import { ActivityType } from '@schema'

import QUERY_ACTIVITY_TYPES from 'api/queries/query-activity-types.graphql'

/**
 * Gets all known ActivityTypes
 * @returns props including an array of activityTypes
 */
export const getActivityTypes: ComposedGetServerSideProps = async () => {
  const apollo = initializeApollo()

  const { data, error } = await apollo.query({
    query: QUERY_ACTIVITY_TYPES,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { activityTypes }: { activityTypes: [ActivityType] } = data
  return {
    props: {
      activityTypes,
    },
  }
}
