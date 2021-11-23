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
import { Acter, ActerConnectionRole, User } from '@acter/schema'

interface InvitationPageProps {
  user: User
  acter?: Acter
  expiredMessage?: string
}
export const InvitationPage: NextPage<InvitationPageProps> = ({
  user,
  acter,
  expiredMessage,
}) => {
  const router = useRouter()

  if (expiredMessage) {
    return (
      <p style={{ textAlign: 'center', marginTop: 100 }}>{expiredMessage}</p>
    )
  }

  const [
    { fetching: creatingConnection },
    createConnection,
  ] = useCreateActerConnection(acter)

  useEffect(() => {
    if (acter) {
      createConnection(acter, user.Acter, ActerConnectionRole.MEMBER)
      router.push(acterAsUrl({ acter }))
    }
  }, [acter])

  if (creatingConnection) return <LoadingSpinner size={30} />

  return null
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), inviteRedirect)

export default InvitationPage
