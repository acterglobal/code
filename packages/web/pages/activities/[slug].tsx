import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActivityDetails } from '@acter/components/activity'
import { Head } from '@acter/components/layout/head'
import { useActerTitle } from '@acter/lib/acter/use-title'

export const ActivityLandingPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('Activities')

  return (
    <>
      <Head title={title} />
      <ActivityDetails />
    </>
  )
}

ActivityLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActivityLandingPage
