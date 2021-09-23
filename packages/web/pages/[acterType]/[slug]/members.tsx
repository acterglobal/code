import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/layout/head'
import { useActerTitle } from '@acter/lib/acter/use-title'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { InterestType } from '@acter/schema'

interface MembersPageProps {
  interestTypes: InterestType[]
}

export const ActerMembersPage: NextPageWithLayout<MembersPageProps> = ({
  interestTypes,
}) => {
  const { title } = useActerTitle('members')
  return (
    <>
      <Head title={title} />
      <ActerMembers interestTypes={interestTypes} />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActerMembersPage
