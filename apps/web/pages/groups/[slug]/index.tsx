import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GroupLanding } from '@acter/components/group'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupLandingPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('Acter')
  const { fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupLandingPage
