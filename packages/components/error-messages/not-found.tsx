import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Typography } from '@material-ui/core'

import { Link } from '@acter/components/util/anchor-link'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { User } from '@acter/schema'

interface NotFoundProps {
  user?: User
  isPrivate?: boolean
}

export const NotFoundMessage: FC<NotFoundProps> = ({ user }) => {
  const router = useRouter()
  const handleRedirectBack = () => router.back()
  const { loginUrl, signupUrl } = useAuthRedirect()

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      We're sorry, but we can't find that Acter. Please{' '}
      {user ? (
        <>
          <Link onClick={handleRedirectBack}>click here</Link>{' '}
        </>
      ) : (
        <>
          <Link href={loginUrl} isExternal>
            login
          </Link>{' '}
          /{' '}
          <Link href={signupUrl} isExternal>
            signup
          </Link>{' '}
        </>
      )}
      and you will arrive at your dashboard.
    </Typography>
  )
}
