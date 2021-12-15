import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { GroupLanding } from '@acter/components/group'
import { GroupLayout } from '@acter/components/group/layout/overall'
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

GroupLandingPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupLandingPage
