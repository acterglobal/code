import { useEffect } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getUserProfile, inviteRedirect } from 'props'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { useUpdateInvite } from '@acter/lib/invites/use-update-invite'
import { Acter, ActerConnectionRole, Invite, User } from '@acter/schema'

interface InvitationPageProps {
  user: User
  acter?: Acter
  expiredMessage?: string
  invite?: Invite
}
export const InvitationPage: NextPage<InvitationPageProps> = ({
  user,
  acter,
  expiredMessage,
  invite,
}) => {
  const router = useRouter()

  if (expiredMessage) {
    return (
      <p style={{ textAlign: 'center', marginTop: 100 }}>{expiredMessage}</p>
    )
  }

  const [_, updateInvite] = useUpdateInvite()

  const [
    { fetching: creatingConnection },
    createConnection,
  ] = useCreateActerConnection(acter, {
    onCompleted: () =>
      updateInvite({ inviteId: invite?.id, acceptedAt: new Date() }),
  })

  useEffect(() => {
    if (acter && invite) {
      createConnection(acter, user.Acter, ActerConnectionRole.MEMBER)
      router.push(acterAsUrl({ acter }))
    }
  }, [acter, invite])

  if (creatingConnection) return <LoadingSpinner size={30} />

  return null
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), inviteRedirect)

export default InvitationPage
