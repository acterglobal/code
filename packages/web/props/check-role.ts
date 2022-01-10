import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { ActerConnectionRole } from '@acter/schema'

export const checkRole = (
  minRole: ActerConnectionRole
): ComposedGetServerSideProps => async ({ props, resolvedUrl }) => {
  if (!props.acter) {
    return {
      props: {},
      notFound: true,
    }
  }

  if (!props.user) {
    const loginUrl = `/api/auth/login?returnTo=${resolvedUrl}`
    return {
      props: {},
      redirect: {
        destination: loginUrl,
      },
    }
  }

  const isPrivate = getPrivacySettings(props.acter)
  const hasRole = followerHasRoleOnActer(props.user.Acter, minRole, props.acter)

  if (isPrivate && !hasRole) {
    return {
      props: {},
      redirect: {
        destination: '/403',
      },
    }
  }

  return {
    props: {},
  }
}
