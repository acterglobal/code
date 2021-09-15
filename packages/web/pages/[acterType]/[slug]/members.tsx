import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { getInterests } from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { InterestType } from '@acter/schema'
import { ActerMembers } from '@acter/components/acter/members'
import { useActer } from '@acter/lib/acter/use-acter'

interface MembersPageProps {
  interestTypes: InterestType[]
}

export const ActerMembersPage: NextPage<MembersPageProps> = ({
  interestTypes,
}) => {
  const { acter } = useActer()

  return (
    <Layout>
      <Head title={`${acter?.name}  - members`} />
      <ActerMembers interestTypes={interestTypes} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActerMembersPage
