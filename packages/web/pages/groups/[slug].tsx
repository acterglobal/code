import { NextPage } from 'next'

import { GroupLanding } from '@acter/components/group'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupLandingPage: NextPage = () => {
  const { acter } = useActer()

  return (
    <Layout>
      <Head title={`${acter?.name} - Acter`} />
      <GroupLanding />
    </Layout>
  )
}

export default GroupLandingPage
