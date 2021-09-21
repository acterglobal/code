import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { ActerLayout } from '@acter/components/acter/layout'
import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

type ActivityLandingPageProps = ActivityDetailsProps

export const ActivityLandingPage: NextPageWithLayout<ActivityLandingPageProps> = ({
  interestTypes,
}) => {
  const { acter } = useActer()

  return (
    <>
      <Head title={`${acter?.name} - Activity`} />
      <ActivityDetails interestTypes={interestTypes} />
    </>
  )
}

ActivityLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActivityLandingPage
