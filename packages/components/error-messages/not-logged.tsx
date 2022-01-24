import React, { FC } from 'react'

import { Typography } from '@material-ui/core'

import { Link } from '@acter/components/util/anchor-link'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

type NotLoggedInMessageProps = {
  previousPath: string
}

export const NotLoggedInMessage: FC<NotLoggedInMessageProps> = ({
  previousPath,
}) => {
  const { loginUrl, signupUrl } = useAuthRedirect(previousPath)

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      Oops, looks like you are not logged in. Please{' '}
      <Link href={loginUrl} isExternal>
        login
      </Link>{' '}
      /{' '}
      <Link href={signupUrl} isExternal>
        signup
      </Link>{' '}
      and you will arrive to your dashboard.
    </Typography>
  )
}
