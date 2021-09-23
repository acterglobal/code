import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { GroupLanding } from '@acter/components/group'
import { Head } from '@acter/components/layout/head'
import { useActerTitle } from '@acter/lib/acter/use-title'

export const GroupLandingPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('Acter')

  return (
    <>
      <Head title={title} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default GroupLandingPage
