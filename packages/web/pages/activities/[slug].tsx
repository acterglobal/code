import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { ActerLayout } from '@acter/components/acter/layout'
import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { Head } from '@acter/components/layout/head'
import { useTitle } from '@acter/lib/acter/use-title'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

type ActivityLandingPageProps = ActivityDetailsProps

export const ActivityLandingPage: NextPageWithLayout<ActivityLandingPageProps> = ({
  interestTypes,
}) => {
  const { title } = useTitle('Activities')

  return (
    <>
      <Head title={title} />
      <ActivityDetails interestTypes={interestTypes} />
    </>
  )
}

ActivityLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActivityLandingPage
