import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Typography } from '@material-ui/core'

import { LoadingSpinner } from '../util/loading-spinner'

import { Link } from '@acter/components/util/anchor-link'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

type Redirect = () => void
interface NotFoundProps {
  isPrivate?: boolean
}

export const NotFoundMessage: FC<NotFoundProps> = () => {
  const router = useRouter()
  const handleRedirectBack: string | Redirect = () => router.back()
  const { loginUrl, signupUrl } = useAuthRedirect()
  const { user, fetching: userLoading } = useUser()

  if (userLoading) return <LoadingSpinner />

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      We're sorry, but we can't find that Acter. Please{' '}
      {user ? (
        <>
          <Link href={handleRedirectBack}>click here</Link>{' '}
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
