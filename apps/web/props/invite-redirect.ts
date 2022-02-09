import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import QUERY_ACTER_ID from '@acter/lib/graphql/queries/acter-by-id.graphql'
import QUERY_INVITE_BY_ID from '@acter/lib/graphql/queries/get-invite-by-id.graphql'
import { getUrqlClient } from '@acter/lib/urql'
import { Acter, Invite } from '@acter/schema'

type InviteData = { invite: Invite }
type InviteVariables = { id: string }
type ActerData = { acter: Acter }
type ActerVariables = { acterId: string }

export const inviteRedirect: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  if (!params.id) {
    console.error('No id in params', params)
    return {
      props: {},
      notFound: true,
    }
  }

  try {
    const urqlClient = getUrqlClient()

    const {
      data: { invite },
      error: inviteError,
    } = await urqlClient
      .query<InviteData, InviteVariables>(QUERY_INVITE_BY_ID, {
        id: params.id,
      })
      .toPromise()

    if (inviteError) throw inviteError

    if (invite?.expiredAt) {
      return {
        props: {
          ...props,
          expiredMessage:
            'Sorry, your invitation has expired. Please reach out to the organisation admin, to receive a new invite.',
        },
      }
    }

    const { data, error: acterError } = await urqlClient
      .query<ActerData, ActerVariables>(QUERY_ACTER_ID, {
        acterId: invite?.onActerId,
      })
      .toPromise()

    if (acterError) throw acterError

    return {
      props: {
        ...props,
        acter: data?.acter,
        invite,
      },
    }
  } catch (error) {
    console.error('Error', error)
    return {
      props: {},
      redirect: { destination: '/500' },
    }
  }
}
