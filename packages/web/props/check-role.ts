import { ComposedGetServerSideProps } from '@acter/lib/compose-props'

import { ActerConnectionRole } from '@acter/schema'
import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'

export const checkRole =
  (minRole: ActerConnectionRole): ComposedGetServerSideProps =>
  async ({ props }) => {
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
