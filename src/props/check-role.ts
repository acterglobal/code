import { ComposedGetServerSideProps } from 'lib/compose-props'

import { ActerConnectionRole } from '@schema'
import { followerHasRoleOnActer } from 'src/lib/acter/follower-has-role-on-acter'

export const checkRole = (
  minRole: ActerConnectionRole
): ComposedGetServerSideProps => async ({ props }) => {
  if (!props.acter || !props.user) {
    return {
      props: {},
      notFound: true,
    }
  }

  if (!followerHasRoleOnActer(props.user.Acter, minRole, props.acter)) {
    return {
      props: {},
      redirect: {
        destination: '/401',
      },
    }
  }

  return {
    props: {},
  }
}
