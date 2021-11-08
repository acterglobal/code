import { NextPage } from 'next'

import { getUserProfile } from 'props'
import { inviteRedirect } from 'props'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

interface InvitationPageProps {
  expiredMessage?: string
}
export const InvitationPage: NextPage<InvitationPageProps> = ({
  expiredMessage,
}) => {
  return <p style={{ textAlign: 'center', marginTop: 100 }}>{expiredMessage}</p>
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), inviteRedirect)

export default InvitationPage
