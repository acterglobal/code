import React, { FC } from 'react'

import { Typography } from '@material-ui/core'

import { Link } from '@acter/components/util/anchor-link'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

export const Custom401: FC = () => {
  const { loginUrl, signupUrl } = useAuthRedirect()

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      You are not authorized to view this page. Please{' '}
      <Link href={loginUrl} isExternal>
        login
      </Link>{' '}
      /{' '}
      <Link href={signupUrl} isExternal>
        signup
      </Link>{' '}
      and try again.
    </Typography>
  )
}
