import React, { FC } from 'react'
import { Trans } from 'react-i18next'

import { Typography } from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { Link } from '@acter/components/util/anchor-link'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export const NotFoundMessage: FC = () => {
  const { t } = useTranslation('error-messages')
  const { loginUrl, signupUrl } = useAuthRedirect('/dashboard')
  const { user, fetching: userLoading } = useUser()

  if (userLoading) return <LoadingSpinner />

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      {user ? (
        <Trans i18nKey="error-messages:404.noActerFound.guest">
          We're sorry, but we can't find that Acter. Please{' '}
          <Link href={'/dashboard'}>{{ clickHere: t('clickHere') }}</Link> and
          you will arrive at your dashboard.
        </Trans>
      ) : (
        <Trans i18nKey="error-messages:404.noActerFound.user">
          We're sorry, but we can't find that Acter. Please{' '}
          <Link href={loginUrl} isExternal>
            {{ login: t('login') }}
          </Link>{' '}
          /{' '}
          <Link href={signupUrl} isExternal>
            {{ signup: t('signup') }}
          </Link>{' '}
          and you will arrive at your dashboard.
        </Trans>
      )}
    </Typography>
  )
}
