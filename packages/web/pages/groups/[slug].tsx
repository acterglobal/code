import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { GroupLanding } from '@acter/components/group'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupLandingPage: NextPageWithLayout = () => {
  const { acter } = useActer()

  return (
    <>
      <Head title={`${acter?.name} - Acter`} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default GroupLandingPage
